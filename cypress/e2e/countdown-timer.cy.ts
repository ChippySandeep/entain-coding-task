import { nextTick } from "process";
import { text } from "stream/consumers";
import { RACING_CATEGORIES } from "../config/constants";
import NexttoGoPage from "../PageObjects/NexttogoPage";

describe('Countdown Timer', () => {
  beforeEach(()=>{
    cy.visit('');  
  })
  const nexttogo = new NexttoGoPage();


   //Verify time is not empty
   it('Verify racetime is dislaying all postive values', () => {
     nexttogo.getRaceTime().should('be.visible');
     nexttogo.getRaceTimes().each(($el)=>{
      cy.wrap($el).children("p")
        .invoke('text')
        .should('not.be.empty')  
   });
  });


  //Verify time is not a negative Value
  it('Verify racetime is dislaying all postive values', () => {
    nexttogo.getRaceTime().should('be.visible');
    nexttogo.getRaceTimes().each(($el)=>{
      cy.wrap($el).children("p")
        .invoke('text') 
        .then((text) => {
          expect(text).to.not.string('-')
      });
    })
 });
     
});

