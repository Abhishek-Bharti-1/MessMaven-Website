function addToList() {
    var name = document.getElementById("itemName").value;
    var description = document.getElementById("itemDescription").value;
    var vegNonVeg = document.getElementById("vegNonVeg").value;
    var quantity = document.getElementById("itemQuantity").value;
  
    if (name === "" || description === "" || quantity === "") {
      alert('Please fill in all fields: Item Name, Description, and Quantity');
    } else {
      var li = document.createElement("li");
      li.className = "item";
  
      var itemDetails = document.createElement("div");
      itemDetails.className = "item-details";
  
      var title = document.createElement("h3");
      title.appendChild(document.createTextNode(name));
      itemDetails.appendChild(title);
  
      var descPara = document.createElement("p");
      descPara.appendChild(document.createTextNode("Description: " + description));
      itemDetails.appendChild(descPara);
  
      var vegNonVegPara = document.createElement("p");
      vegNonVegPara.appendChild(document.createTextNode("Type: " + vegNonVeg));
      itemDetails.appendChild(vegNonVegPara);
  
      var quantityPara = document.createElement("p");
      quantityPara.appendChild(document.createTextNode("Quantity: " + quantity));
      itemDetails.appendChild(quantityPara);
  
      var close = document.createElement("SPAN");
      var closeNode = document.createTextNode("X");
      close.appendChild(closeNode);
      close.className = "close";
  
      li.appendChild(itemDetails);
      li.appendChild(close);
  
      document.getElementById("list").appendChild(li);
      document.getElementById("list").appendChild(li);
      if (vegNonVeg === "Vegetarian") {
        li.style.backgroundColor = "rgba(76, 175, 80, 0.3)"; // Faint green for vegetarian items
      } else {
        li.style.backgroundColor = "rgb(255,127, 127)"; // Faint red for non-vegetarian items
      }
    }
  }
  
  document.body.addEventListener("click", function (event) {
    if (event.target.className == "close") {
      event.target.parentElement.style.display = "none";
    }
  });
  
  document.body.addEventListener("click", function (event) {
    if (event.target.tagName == "LI") {
      event.target.classList.toggle("check");
    }
  });
  function makeHTMLElement(tag, classes, text, attributes) {	
      var d = document.createElement(tag);
      $(d).addClass(classes);
      $(d).append(text);
      for(var prop in attributes) {
          $(d).attr(prop, attributes[prop]);
      }
      return d;
  }
  const leaveRequestsData = [
    { id: 1, name: 'Shreya Kumari', startDate: '2023-12-20', endDate: '2023-12-22' },
    { id: 2, name: 'Apoorv Yash', startDate: '2023-12-25', endDate: '2023-12-27' },
    { id: 3, name: 'Abhishek Bharti', startDate: '2023-12-25', endDate: '2023-12-28' },
    { id: 4, name: 'Aditya', startDate: '2023-12-25', endDate: '2023-12-26' },
    { id: 5, name: 'Skand Yadav', startDate: '2023-12-25', endDate: '2023-12-27' },
    { id: 6, name: 'Divya Kapoor', startDate: '2023-12-25', endDate: '2023-12-28' },
    
  ];
  
  function displayLeaveRequests() {
    const leaveRequestsContainer = document.querySelector('.leave-requests');
  
    leaveRequestsData.forEach(request => {
      const leaveRequest = document.createElement('div');
      leaveRequest.classList.add('leave-request');
      leaveRequest.dataset.id = request.id; 
  
      const details = document.createElement('div');
      details.classList.add('leave-request-details');
  
      const name = document.createElement('p');
      name.textContent = `Name: ${request.name}`;
  
      const startDate = document.createElement('p');
      startDate.classList.add('leave-request-details-date');
      startDate.textContent =` Start Date: ${request.startDate}`;
  
      const endDate = document.createElement('p');
      endDate.classList.add('leave-request-details-date');
      endDate.textContent = `End Date: ${request.endDate}`;
  
      details.appendChild(name);
      details.appendChild(startDate);
      details.appendChild(endDate);
  
      const actions = document.createElement('div');
      actions.classList.add('leave-request-actions');
  
      const approveBtn = document.createElement('button');
      approveBtn.classList.add('approve-btn');
      approveBtn.textContent = 'Approve';
      approveBtn.addEventListener('click', () => approveLeaveRequest(request.id, leaveRequest));
  
      const rejectBtn = document.createElement('button');
      rejectBtn.classList.add('reject-btn');
      rejectBtn.textContent = 'Reject';
      rejectBtn.addEventListener('click', () => rejectLeaveRequest(request.id, leaveRequest));
  
      actions.appendChild(approveBtn);
      actions.appendChild(rejectBtn);
  
      leaveRequest.appendChild(details);
      leaveRequest.appendChild(actions);
  
      leaveRequestsContainer.appendChild(leaveRequest);
    });
  }
  
  function createNotification(message, color) {
    const notificationContainer = document.querySelector('.notification-container');
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.style.backgroundColor = color;
  
    const notificationMessage = document.createElement('p');
    notificationMessage.textContent = message;
    notificationMessage.style.color = 'white'; // Set text color to white
    notification.appendChild(notificationMessage);
  
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    notification.appendChild(progressBar);
  
    notificationContainer.appendChild(notification);
  
    setTimeout(() => {
      notification.remove();
    }, 2000); // Remove notification after 2 seconds
  }
  
  function approveLeaveRequest(requestId, leaveRequestElement) {
    leaveRequestElement.remove();
    createNotification('Leave request approved', '#41c764');
  }
  
  function rejectLeaveRequest(requestId, leaveRequestElement) {
    leaveRequestElement.remove();
    createNotification('Leave request rejected', '#FF6666');
  }
  
  window.onload = function() {
    displayLeaveRequests();
  };