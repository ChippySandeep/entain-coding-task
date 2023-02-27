import { electron } from "webpack";
import { RACING_CATEGORIES } from "../config/constants";
import NexttoGoPage from "../PageObjects/NexttogoPage";



describe('Category Filters', () => {

  beforeEach(()=>{
    cy.visit('');  
  })

  const nexttogo = new NexttoGoPage();
  
  //Verify only 5 upcoming games are only displayed when all checkboxs are selected
  it('Verify 5 Races are only listed when all checkbox are selected', () => {
    
      nexttogo.getFilters().within(() => {
              nexttogo.getCheckbox().check().should('be.checked');
            });
      nexttogo.getRaceNames().should('have.length','5');  
  });


  //Verify  5 upcoming games are only displayed when single checkbox is selected
  it('Verify 5 Races are only listed when any single checkbox is selected', () => {
    
    nexttogo.getLabels().each( ($el,index,$list)=>{
      nexttogo.getFilters().within(() => {
          RACING_CATEGORIES.forEach((category) => {
          
            if ($el.text()==(category.name))
            {
              nexttogo.getFilter(category.categoryId).within(() => {
              nexttogo.getCheckbox().check().should('be.checked');
            });
            }  
            else{
              nexttogo.getFilter(category.categoryId).within(() => {
                nexttogo.getCheckbox().uncheck().should('not.be.checked');
              });
            }
            
          });
          nexttogo.getCheckbox().check().should('be.checked');
      });  
      nexttogo.getRaceNames().should('have.length','5');  
  });
});

 //Verify the Race id, name and time are not empty
 it('Verify id , name and time is dislayed for each race', () => {
  
  nexttogo.getRaceNames().should('have.length','5')
                     .should('not.be.empty');

  nexttogo.getRaceIds().should('have.length','5')
                      .should('not.be.empty');

  nexttogo.getRaceTimes().should('have.length','5') 
                        .should('not.be.empty');       
                     
  });
 });




