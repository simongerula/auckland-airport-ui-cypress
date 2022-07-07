import HomePage from '../pages/homePage';

describe('Home Page UI Tests', () => {

  beforeEach(()=>{
    HomePage.navigateToHome();
  });

  it('should have 7 items on the navbar', () => {
    HomePage.haveNavbarItems(7);
  });

  it('should have arrivals/depatures options on the search bar', ()=>{
    HomePage.haveArrivalsDepaturesOptions();
  });

  it('should have 6 items on the main dashboard', () => {
    HomePage.haveDashboardItems(6);
  });

  it('should have correct text and buttons on "Departing" option', () => {
    HomePage.haveCorrectSubtitle('departure');
    HomePage.haveCorrectInformation([0,1,2,3]);
  });

  it('should have correct text and buttons on "Arriving" option', () => {
    HomePage.clickArrivingButton();
    HomePage.haveCorrectSubtitle('arrival');
    HomePage.haveCorrectInformation([4,5,6,7]);
  });

  it('should have correct text and buttons on "In Transit" option', () => {
    HomePage.clickInTransitButton();
    HomePage.haveCorrectSubtitle('transit');
    HomePage.haveCorrectInformation([8,9,10,11]);
  });

  it('should have 6 social media icons with their correct hrefs', () => {
    HomePage.haveSocialIcons(6);
    HomePage.haveCorrectSocialIcon('Facebook');
    HomePage.haveCorrectSocialIcon('Twitter');
    HomePage.haveCorrectSocialIcon('LinkedIn');
    HomePage.haveCorrectSocialIcon('Instagram');
    HomePage.haveCorrectSocialIcon('WeChat');
    HomePage.haveCorrectSocialIcon('Email');
  });

  it('should have 6 columns of useful links with atleast 1 link', ()=> {
    HomePage.haveColumnsOfUsefulLinks(6);
    HomePage.haveAtleastOneLinkPerColumn(6);
  });

});