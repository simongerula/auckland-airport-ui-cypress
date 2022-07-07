class HomePage {

    // LOCATORS
    constructor(){
        // NAVBAR
        this.navBarItems = ()=> cy.get('.mega-menu > li');
        // SELECT FLIGHT SEARCHER
        this.arrivalsDepaturesSelect = ()=> cy.get('.select-arrival-departure > ul > li');
        // MAIN DASHBOARD
        this.dashboardItems = ()=> cy.get('.dashboard-group > .clearfix > div');
        // HELP LINKS
        this.departingButton = ()=> cy.get('.nav .btn').eq(0);
        this.ArrivingButton = ()=> cy.get('.nav .btn').eq(1);
        this.inTransitButton = ()=> cy.get('.nav .btn').eq(2);
        this.planBeforeYouFlySubtitle = ()=> cy.get('.subtitle');
        this.planBeforeYouFlyItems = ()=> cy.get('.row > .col-sm-3');
        // SOCIAL ICONS
        this.socialIcons = ()=> cy.get('footer .col-xs-12 > ul > li');
        // USEFUL LINKS
        this.columnsUsefulLinks = ()=> cy.get('.nav-main > .container-fluid > .row > li');
    }

    // ACTIONS
    haveNavbarItems(quantity){
        this.navBarItems()
        .should('have.length', quantity);
    };

    haveArrivalsDepaturesOptions(){
        this.arrivalsDepaturesSelect()
        .first()
        .should('have.text', 'Arrivals');
        this.arrivalsDepaturesSelect()
        .last()
        .should('have.text', 'Departures');
    }

    haveDashboardItems(quantity){
        this.dashboardItems()
        .should('have.length', quantity);
    }

    clickArrivingButton(){
        this.ArrivingButton()
        .click()
    }

    clickInTransitButton(){
        this.inTransitButton()
        .click()
    }

    haveCorrectSubtitle(keyWord){
        switch (keyWord) {
            case 'departure':
                this.planBeforeYouFlySubtitle()
                .contains(keyWord)
                .should('have.text', 'The following information will help make your departure stress free');
                break;
            case 'arrival':
                this.planBeforeYouFlySubtitle()
                .contains(keyWord)
                .should('have.text', 'The following information will help make your arrival stress free');
                break;
            case 'transit':
                this.planBeforeYouFlySubtitle()
                .contains(keyWord)
                .should('have.text', 'The following information will help make your transit stress free');
                break;
        };
    };

    haveCorrectInformation(optionsArray){
        optionsArray.forEach(option =>{
            switch (option) {
                case 0:
                    this.planBeforeYouFlyItems()
                    .eq(0)
                    .should('contains.text', 'Liquids, aerosols and gels - restrictions explained');
                    break;
                case 1:
                    this.planBeforeYouFlyItems()
                    .eq(1)
                    .should('contains.text', 'Join Strata Club for rewards and benefits throughout your journey');
                    break;
                case 2:
                    this.planBeforeYouFlyItems()
                    .eq(2)
                    .should('contains.text', 'Airport maps');
                    break;
                case 3:
                    this.planBeforeYouFlyItems()
                    .eq(3)
                    .should('contains.text', 'Travelling with children');
                case 4:
                    this.planBeforeYouFlyItems()
                    .eq(4)
                    .should('contains.text', 'Immigration requirements');
                case 5:
                    this.planBeforeYouFlyItems()
                    .eq(5)
                    .should('contains.text', 'Anything to declare');
                case 6:
                    this.planBeforeYouFlyItems()
                    .eq(6)
                    .should('contains.text', 'Transport information');
                case 7:
                    this.planBeforeYouFlyItems()
                    .eq(7)
                    .should('contains.text', 'Tourism information');
                case 8:
                    this.planBeforeYouFlyItems()
                    .eq(8)
                    .should('contains.text', 'International transit');
                case 9:
                    this.planBeforeYouFlyItems()
                    .eq(9)
                    .should('contains.text', 'Directions between terminals');
                case 10:
                    this.planBeforeYouFlyItems()
                    .eq(10)
                    .should('contains.text', 'Local shops and services');
                case 11:
                    this.planBeforeYouFlyItems()
                    .eq(11)
                    .should('contains.text', 'Terminal services and facilities');

            };
        });
    };

    haveSocialIcons(quantity){
        this.socialIcons()
        .should('have.length', quantity);
    };

    haveCorrectSocialIcon(name){
        switch (name) {
            case 'Facebook':
                this.socialIcons()
                .children(`a[title*="${name}"]`)
                .should('have.attr', 'href', 'https://www.facebook.com/AucklandAirport')
                break;
            case 'Twitter':
                this.socialIcons()
                .children(`a[title*="${name}"]`)
                .should('have.attr', 'href', 'https://twitter.com/AKL_Airport')
                break;
            case 'LinkedIn':
                this.socialIcons()
                .children(`a[title*="${name}"]`)
                .should('have.attr', 'href', 'https://www.linkedin.com/company/auckland-international-airport-limited')
                break;
            case 'Instagram':
                this.socialIcons()
                .children(`a[title*="${name}"]`)
                .should('have.attr', 'href', 'https://www.instagram.com/aucklandairport/')
                break;
            case 'WeChat':
                this.socialIcons()
                .children(`a[title*="${name}"]`)
                .should('have.attr', 'href', 'https://web.wechat.com/')
                break;
            case 'Email':
                this.socialIcons()
                .children(`a[title*="${name}"]`)
                .should('have.attr', 'href', '/contact-us')
                break;
        };
    };

    haveColumnsOfUsefulLinks(quantity){
        this.columnsUsefulLinks()
        .should('have.length', quantity);
    };

    haveAtleastOneLinkPerColumn(quantityOfColumns){
        for(let i=0; i<quantityOfColumns; i++){
            this.columnsUsefulLinks()
            .eq(i)
            .children()
            .find('a')
            .its('length').should('be.gte', 1);
        };
    };

    // NAVIGATION
    navigateToHome(){
      cy.visit('https://www.aucklandairport.co.nz');
    };
  
};
export default new HomePage;