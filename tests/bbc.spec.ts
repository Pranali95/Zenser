/*Feature: As a business user, I would like to make a record of all teams which are
playing today
Scenario: Output all team names with a match today. If there are no matches today,
output a message to convey this.*/


import {test,expect} from '@playwright/test';


test("today's team of BBC", async ({page})=>{



    
      // Navigate to the BBC Scores & Fixtures page
      await page.goto('https://www.bbc.com/sport/football/scores-fixtures');
      
      const today = new Date().toISOString().split('T')[0];

      // Select the matches for today
      const matches = await page.$$(`.qa-match-block[data-competition-matches-list-date="${today}"] .sp-c-fixture`);
    
      const teamsPlayingToday: string[] = [];
    
      for (const match of matches) {
        const homeTeam = await match.$eval('.sp-c-fixture__team--home .sp-c-fixture__team-name', el => el.textContent?.trim() || '');
        const awayTeam = await match.$eval('.sp-c-fixture__team--away .sp-c-fixture__team-name', el => el.textContent?.trim() || '');
        teamsPlayingToday.push(`${homeTeam} vs ${awayTeam}`);
      }
    
      // Print the teams playing today or a message if no matches are found
      if (teamsPlayingToday.length > 0) {
        console.log("Teams playing today:");
        teamsPlayingToday.forEach(team => console.log(team));
      } else {
        console.log("There are no matches today.");
      }

})

   
  

 
