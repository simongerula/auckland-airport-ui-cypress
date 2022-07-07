import HomePage from '../pages/homePage';
const home = new HomePage;

describe('Home Page UI Tests', () => {

  beforeEach(()=>{
    home.navigateToHome();
  });

  it('should have 7 items on the navbar', () => {
    home.navBarItems()
    .should('have.length', 7);
  });

  it('should have arrivals/depatures options on the search bar', ()=>{
    home.arrivalsDepaturesSelect()
    .first()
    .should('have.text', 'Arrivals');
    home.arrivalsDepaturesSelect()
    .last()
    .should('have.text', 'Departures');
  });

  it('should have 6 items on the main dashboard', () => {
    home.dashboardItems()
    .should('have.length', 6);
  });

  it('should have correct text and buttons on "Departing" option', () => {
    home.planBeforeYouFlySubtitle()
    .eq(0)
    .should('have.text', 'The following information will help make your departure stress free');
    home.planBeforeYouFlyItems()
    .eq(0)
    .should('contains.text', 'Liquids, aerosols and gels - restrictions explained');
    home.planBeforeYouFlyItems()
    .eq(1)
    .should('contains.text', 'Join Strata Club for rewards and benefits throughout your journey');
    home.planBeforeYouFlyItems()
    .eq(2)
    .should('contains.text', 'Airport maps');
    home.planBeforeYouFlyItems()
    .eq(3)
    .should('contains.text', 'Travelling with children');
  });

  it('should have correct text and buttons on "Arriving" option', () => {
    home.ArrivingButton()
    .click()
    home.planBeforeYouFlySubtitle()
    .eq(1)
    .should('have.text', 'The following information will help make your arrival stress free');
    home.planBeforeYouFlyItems()
    .eq(4)
    .should('contains.text', 'Immigration requirements');
    home.planBeforeYouFlyItems()
    .eq(5)
    .should('contains.text', 'Anything to declare');
    home.planBeforeYouFlyItems()
    .eq(6)
    .should('contains.text', 'Transport information');
    home.planBeforeYouFlyItems()
    .eq(7)
    .should('contains.text', 'Tourism information');
  });

  it('should have correct text and buttons on "In Transit" option', () => {
    home.inTransitButton()
    .click()
    home.planBeforeYouFlySubtitle()
    .eq(2)
    .should('have.text', 'The following information will help make your transit stress free');
    home.planBeforeYouFlyItems()
    .eq(8)
    .should('contains.text', 'International transit');
    home.planBeforeYouFlyItems()
    .eq(9)
    .should('contains.text', 'Directions between terminals');
    home.planBeforeYouFlyItems()
    .eq(10)
    .should('contains.text', 'Local shops and services');
    home.planBeforeYouFlyItems()
    .eq(11)
    .should('contains.text', 'Terminal services and facilities');
  });

  it('should have 6 social media icons with their correct hrefs', () => {
    home.socialIcons()
    .should('have.length', 6);
    home.socialIcons()
    .first()
    .should('have.attr', 'href', 'https://www.facebook.com/AucklandAirport')
    .and('have.attr', 'title', 'Follow Auckland Airport on Facebook');
    home.socialIcons()
    .eq(1)
    .should('have.attr', 'href', 'https://twitter.com/AKL_Airport')
    .and('have.attr', 'title', 'Follow Auckland Airport on Twitter');
    home.socialIcons()
    .eq(2)
    .should('have.attr', 'href', 'https://www.linkedin.com/company/auckland-international-airport-limited')
    .and('have.attr', 'title', 'LinkedIn tooltip');
    home.socialIcons()
    .eq(3)
    .should('have.attr', 'href', 'https://www.instagram.com/aucklandairport/')
    .and('have.attr', 'title', 'Follow Auckland Airport on Instagram');
    home.socialIcons()
    .eq(4)
    .should('have.attr', 'href', 'https://web.wechat.com/')
    .and('have.attr', 'title', 'Follow Auckland Airport on WeChat');
    home.socialIcons()
    .eq(5)
    .should('have.attr', 'href', '/contact-us')
    .and('have.attr', 'title', 'Email Auckland Airport');
  });

  it('should have 6 columns of useful links with atleast 1 link', ()=> {
    home.columnsUsefulLinks()
    .should('have.length', 6);
    home.columnsUsefulLinks()
    .first()
    .children()
    .find('a')
    .its('length').should('be.gte', 1);
    home.columnsUsefulLinks()
    .eq(1)
    .children()
    .find('a')
    .its('length').should('be.gte', 1);
    home.columnsUsefulLinks()
    .eq(2)
    .children()
    .find('a')
    .its('length').should('be.gte', 1);
    home.columnsUsefulLinks()
    .eq(3)
    .children()
    .find('a')
    .its('length').should('be.gte', 1);
    home.columnsUsefulLinks()
    .eq(4)
    .children()
    .find('a')
    .its('length').should('be.gte', 1);
    home.columnsUsefulLinks()
    .eq(5)
    .children()
    .find('a')
    .its('length').should('be.gte', 1); 
  });

});