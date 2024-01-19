// client/src/api/contactApi.js
import axios from 'axios';

const contactApi = {
  submitFeedback: async (feedbackData) => {
    try {
      const response = await axios.post('https://sambhavj.onrender.com/contact/submit', feedbackData);
      return response.data;
    } catch (error) {
      console.error('Error submitting feedback:', error);
      throw error;
    }
  },
};

export default contactApi;
