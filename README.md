Github API Playground
===

## Purpose of this project
- practice github API
- try to use modern build tool(vite) to implement a js lib
- try to use modern build tool(vite) to implement a react component lib

## Project Structures
- github-service
    - a js lib which provides github-related functions by utilizing github API 
- ui-lib
    - a react component lib which provides various base components such as input, button, repo list and star icon
- web-app
    - our main app which uses other 2 libs to provide core function.

## Use cases
1. users can input their github API token
2. after step#1, users can search up to 10 repos by keyword, the result would be displayed as a list
3. after step#2, users can star/unstar a repo or check last 5 commits of a repo.

## Live Demo
[Live Demo](https://kh931623.github.io/github-api-playground/)

## Any Core features that we haven't finished?
N/A

## What can we imporve?
1. dont use alert to show errors
2. dont use alert to show last 5 commits hash for a repo
3. Better Styling
4. Add a loading effect to indicate the App is loading stuff from backend

## What Features can we add?
1. Make repo name a link to Github repo page.