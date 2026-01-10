# Vite Module Resolution Fixes

## Issues Identified
1. **CareerApplicationForm not found**: The component exists in root `src/components/forms/` but is imported in nested `bangalore-electronics-frontend/src/pages/Careers/Careers.jsx`.
2. **Video imports failing**: Videos are imported with `/videos/offerings/` paths, but Vite may be running from different directories causing resolution issues.

## Fixes Applied
- [x] Copied `CareerApplicationForm.jsx` to `bangalore-electronics-frontend/src/components/forms/CareerApplicationForm.jsx`
- [x] Created `bangalore-electronics-frontend/public/videos/offerings/` directory
- [x] Copied video files from root `public/videos/offerings/` to nested `bangalore-electronics-frontend/public/videos/offerings/`

## Next Steps
- [ ] Verify Vite is running from the correct directory (`bangalore-electronics-frontend/`)
- [ ] Test the dev server to ensure imports resolve correctly
- [ ] If issues persist, consider updating import paths to relative paths for better reliability

## Notes
- The project structure has a nested `bangalore-electronics-frontend/` folder inside the root `bangalore-electronics-frontend/`
- Ensure you're running `npm run dev` from the nested directory if that's the active project

---

# AI Chatbot Setup TODO

## Backend Setup
- [x] Create server.js with OpenAI integration
- [x] Install dependencies (express, cors, openai, dotenv)
- [x] Create .env file for API key
- [ ] Set OpenAI API key in .env file
- [ ] Start backend server (npm start in backend directory)

## Frontend Updates
- [ ] Update Chatbot.jsx to use API calls instead of rule-based responses

## Testing
- [ ] Test chatbot with various questions
- [ ] Verify error handling
- [ ] Test backend API directly

## Deployment Notes
- Remember to set OPENAI_API_KEY environment variable in production
- Backend should be deployed separately from frontend
- Update API endpoint URL for production
