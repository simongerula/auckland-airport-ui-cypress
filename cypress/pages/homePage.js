class HomePage {

    // LOCATORS
    /* NAVBAR */
    navBarItems(){
        return cy.get('.mega-menu > li');
    };

    /* SELECT FLIGHT SEARCHER */
    arrivalsDepaturesSelect(){
        return cy.get('.select-arrival-departure > ul > li');
    };

    /* MAIN DASHBOARD */
    dashboardItems(){
        return cy.get('.dashboard-group > .clearfix > div');
    };

    /* HELP LINKS */
    departingButton(){
        return cy.get('.nav .btn').eq(0);
    };
    ArrivingButton(){
        return cy.get('.nav .btn').eq(1);
    };
    inTransitButton(){
        return cy.get('.nav .btn').eq(2);
    };
    planBeforeYouFlySubtitle(){
        return cy.get('.subtitle');
    };
    planBeforeYouFlyItems(){
        return cy.get('.row > .col-sm-3');
    };

    /* SOCIAL ICONS */
    socialIcons(){
        return cy.get('footer .col-xs-12 > ul > li > a');
    };

    /* USEFUL LINKS */
    columnsUsefulLinks(){
        return cy.get('.nav-main > .container-fluid > .row > li');
    }

    // ACTIONS

    // NAVIGATION
    navigateToHome(){
      cy.visit('https://www.aucklandairport.co.nz');
    };
  
  };
  export default HomePage;