import { RACING_CATEGORIES } from "../config/constants";
import NexttoGoPage from "../PageObjects/NexttogoPage";



describe('Page Content', () => {
  const nexttogo = new NexttoGoPage();
  beforeEach(()=>{
    cy.visit('');  
  })
//Verify the Title of the Page
  it('Should correctly display page title', () => {
    nexttogo.getTitle().contains('Next To Go Races').and('be.visible');
  });

//Verify all checkboxes are selected  by default
  it('Should have all filters checked by default', () => {
    nexttogo.getFilters().within(() => {
      RACING_CATEGORIES.forEach((category) => {
        nexttogo.getFilter(category.categoryId).within(() => {
          nexttogo.getLabels().contains(category.name).and('be.visible');
          nexttogo.getCheckbox().should('be.checked');
        });
      })
    });
  })
});
