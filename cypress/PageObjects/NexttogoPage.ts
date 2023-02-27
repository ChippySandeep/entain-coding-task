import { RACING_CATEGORIES } from "../config/constants";

export class NexttoGoPage{

   
    getTitle(){
        return "cy.get('[data-testid=page-title]')";
     }

    getLabels() {
        return cy.get('[data-testid=category-filter-label]');
    }  

    getFilters() {
        return cy.get('[data-testid=category-filters]');
      }  

    getCheckbox() {
            return cy.get('[data-testid=category-filter-checkbox]');
     } 

     getFilter(param: string) {
        return cy.get(`[data-testid=category-filter-${param}]`)
     }

    

     getRaceNames() {
        return cy.get('.race-name > p');
    }  

    getRaceIds() {
        return cy.get('.race-name > .race-number')
    } 

    GetAllRaces(){
        cy.xpath('//*[@id="root"]/div/header/div/div/div[2]');
    }

    getRaceTimes() {
        return cy.xpath('//*[@id="root"]/div/header/div/div/div[2]/div');
    }

    getRaceTime() {
        return cy.xpath('//*[@id="root"]/div/header/div/div/div[2]/div[1]/div/p');
    }
   
}
export default NexttoGoPage;