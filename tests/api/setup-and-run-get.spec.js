import {test, expect} from '@playwright/test';


test('GET method example', async ({ request }) => {

    //const baseUrl = "https://spartan-app-new-nonsecure.onrender.com";
    //const endPoint = "/api/v2/spartans";

    //let response = await request.get(`${baseUrl}${endPoint}`);
    let response = await request.get("/api/v2/spartans");

    console.log(response);

    // verify that status code is 200
    test.expect(response.status()).toBe(200);

    // verify content type is application/json
    test.expect(response.headers()['content-type']).toContain('application/json');


});





test("GET method example with path parameter", async ({ request }) => {
  let id = 1168;
  let response = await request.get(`/api/v2/spartans/${id}`);


  // verify that status code is 200
  test.expect(response.status()).toBe(200);

  // verify content type is application/json
  test.expect(response.headers()["content-type"]).toContain("application/json");

  let responseBody = await response.json();

  console.log(responseBody);

  expect(responseBody.message).toBe('Successfully retrieved the Spartan.');
  expect(responseBody.data.id).toBe(id);
  expect(responseBody.data.name).toBe('Canan');


});