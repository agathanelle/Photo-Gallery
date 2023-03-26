# Photo Gallery Website

The main goal of this photo gallery to create a website where user can view multiple photos, like/unlike photos. Currently this project is inprogress, so new functionalities can be added after some time.

## What is done so far

- Added Fetch API with Async/await
    - Used Pexels API
- Added infinite scroll functionality
    - Handled case when no internet occured
- Added favouritism mechanism to like certain photos
    - All liked photos do not disappear after page reload as whole data is stored in localStorage
- Style whole page according to display size
- Added skeleton placeholder when image isn't fully loaded

## What is planned to do

- Search bar for fetching different types of photos
- Page for photos that user liked
- Rewrite whole logic of fetching and saving data of every photo in localStorage
    - Save only ids of photos that were liked OR
    - Save whole data of fetched photos, when user loads page, load everything from localStorage then only fetch from API

## Used technologies

- TypeScript
- React
- CSS 