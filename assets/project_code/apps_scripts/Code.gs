const GCP_PROJECT = "https://us-central1-project-canis-educere.cloudfunctions.net/createLearnerReport"

function onNewFormSubmission(event) {
  console.log(event.values)
  var httpRequestToGCP = {
    "method": "POST",
    "contentType": "application/json",
    "payload": JSON.stringify(
      {
        "requestorEmail": event.values[1],
        "orgName": event.values[2],
        }
    )
  }
  var gcpResponse = UrlFetchApp.fetch(GCP_PROJECT, httpRequestToGCP);
  Logger.log(gcpResponse);
  Logger.log(httpRequestToGCP);
}
