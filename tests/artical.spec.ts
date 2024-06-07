/*Feature: As a sports user, I would like to read about all articles related to sports
Scenario: Use the search option to find all articles related to ‘sports’. Output the first
heading and the last heading returned on the page.*/

import { test,expect } from '@playwright/test';

    test("sports articals", async({page})=>
    {
  try {
 
 
    // Navigate to the website
    await page.goto('https://your-website-url');

    // Search for articles related to 'sports'
    await page.fill('input[id="search-input"]', 'sports');
    await page.press('input[id="search-input"]', 'Enter');

    // Wait for the search results to load
    await page.waitForSelector('.search-results');

    // Get all article headings
    const articleHeadings = await page.$$eval('.search-results .article-heading', headings => headings.map(heading => heading.textContent));

    // Output the first and last headings
    if (articleHeadings.length > 0) {
      console.log("First heading:", articleHeadings[0]);
      console.log("Last heading:", articleHeadings[articleHeadings.length - 1]);
    } else {
      console.log("No articles found related to 'sports'");
    }

  } catch (error) {
    console.error('Error during test execution:', error);
  }
    
  
});
