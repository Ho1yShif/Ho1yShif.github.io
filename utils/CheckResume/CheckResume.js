const axios = require('axios');

const runResumeTest = () => {
  const checkLink = async () => {
    try {
      await axios.get('https://drive.google.com/file/d/13f_wkFv5v536YB');
    } catch (error) {
      alert('The resume link is not working. Please try again later.');
    }
  };

  checkLink();
};

export default runResumeTest;
//https://drive.google.com/file/d/13f_wkFv5v536YB5onTxRraPWiKfjUhSG/view