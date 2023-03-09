
lmsReportin2 [delete after done, just using as scratchpad]


const https = require('https');

function retrieveLearnerDataByOrg(parsedOrgData, callback = () => {}) {
    let url = 'https://mockend.com/courtneyphillips/canis-educere-mock-api/learner?orgId_eq=' + encodeURIComponent(parsedOrgData[0].id);
    https.get(url, (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => {
        const parsedLearnerData = JSON.parse(data);
        callback(parsedLearnerData);
      });
    }).on('error', (err) => {
      console.error(err);
      callback([]);
    });
  }

exports.serveLmsReports = (req, res) => {
  let url = 'https://mockend.com/courtneyphillips/canis-educere-mock-api/organization?companyName_eq=' + encodeURIComponent(req.body.orgName);
  https.get(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
      data += chunk;
    });
    response.on('end', () => {
      const parsedOrgData = JSON.parse(data);
      let parsedLearnerData = retrieveLearnerDataByOrg(parsedOrgData);
      console.log(parsedLearnerData);
      res.status(200).send("Request successfully processed by the contactLMS function in GCP!")
    });
  }).on('error', (err) => {
    console.error(err);
    res.status(500).send('Oh no, there was an error in processing your request. Check Logs for GCP and Apps Scripts.');
  });
};


-----


first iteration (working, but has sendgrid)


const https = require('https');
const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY = (process.env.SENDGRID_API_KEY_MANAGED_BY_GOOGLE_SECRETS).replace(/\r?\n|\r/g, '');

function retrieveOrgLearnerData(parsedOrgData, callback = () => {}) {
  let url = 'https://mockend.com/courtneyphillips/canis-educere-mock-api/learner?orgId_eq=' + encodeURIComponent(parsedOrgData[0].id);
  https.get(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
      data += chunk;
    });
    response.on('end', () => {
      const parsedLearnerData = JSON.parse(data);
      callback(parsedLearnerData);
    });
  }).on('error', (err) => {
    console.error(err);
    callback([]);
  });
}

function compileAndSendEmailReport(parsedOrgData, parsedLearnerData, callback = () => {}){
  sgMail.setApiKey(SENDGRID_API_KEY);
  const emailObject = {
    to: 'courtney.mae.phillips+recipient@gmail.com',
    from: 'courtney.mae.phillips@gmail.com',
    subject: 'Your LMS Learner Report',
    text: 'Your report is below:' + JSON.stringify(parsedLearnerData)
  }
  sgMail.send(emailObject).then(() => {
      console.log('Email sent');
      callback('email sent')
    })
    .catch((error) => {
      console.error(error)
      console.error("error sending")
      callback([])
    })
}

exports.contactLMS = (req, res) => {
  let url = 'https://mockend.com/courtneyphillips/canis-educere-mock-api/organization?companyName_eq=' + encodeURIComponent(req.body.orgName);
  https.get(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
      data += chunk;
    });
    response.on('end', () => {
      const parsedOrgData = JSON.parse(data);
      let parsedLearnerData = retrieveOrgLearnerData(parsedOrgData);
      let emailConfirmation = compileAndSendEmailReport(parsedOrgData, parsedLearnerData);
      res.status(200).send("Request successfully processed by the contactLMS function in GCP!")
    });
  }).on('error', (err) => {
    console.error(err);
    res.status(500).send('Oh no, there was an error in processing your request. Check Logs for GCP and Apps Scripts.');
  });
};


-----




























const https = require('https');
const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY = (process.env.SENDGRID_API_KEY_MANAGED_BY_GOOGLE_SECRETS).replace(/\r?\n|\r/g, '');

function retrieveOrgLearnerData(parsedOrgData, callback = () => {}) {
  let url = 'https://mockend.com/courtneyphillips/canis-educere-mock-api/learner?orgId_eq=' + encodeURIComponent(parsedOrgData[0].id);
  https.get(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
      data += chunk;
    });
    response.on('end', () => {
      const parsedLearnerData = JSON.parse(data);
      callback(parsedLearnerData);
    });
  }).on('error', (err) => {
    console.error(err);
    callback([]);
  });
}

function compileAndSendEmailReport(parsedOrgData, parsedLearnerData, callback = () => {}){
  sgMail.setApiKey(SENDGRID_API_KEY);
  const emailObject = {
    to: 'courtney.mae.phillips+recipient@gmail.com',
    from: 'courtney.mae.phillips@gmail.com',
    subject: 'Your LMS Learner Report',
    text: 'Your report is below:' + JSON.stringify(parsedLearnerData)
  }
  sgMail.send(emailObject).then(() => {
      console.log('Email sent');
      callback('email sent')
    })
    .catch((error) => {
      console.error(error)
      console.error("error sending")
      callback([])
    })
}

exports.contactLMS = (req, res) => {
  let url = 'https://mockend.com/courtneyphillips/canis-educere-mock-api/organization?companyName_eq=' + encodeURIComponent(req.body.orgName);
  https.get(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
      data += chunk;
    });
    response.on('end', () => {
      const parsedOrgData = JSON.parse(data);
      let parsedLearnerData = retrieveOrgLearnerData(parsedOrgData);
      let emailConfirmation = compileAndSendEmailReport(parsedOrgData, parsedLearnerData);
      res.status(200).send("Request successfully processed by the contactLMS function in GCP!")
    });
  }).on('error', (err) => {
    console.error(err);
    res.status(500).send('Oh no, there was an error in processing your request. Check Logs for GCP and Apps Scripts.');
  });
};
