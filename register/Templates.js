// Creates NEW participant HTML with unique IDs
export function participantTemplate(count) {
  return `
  <section class="participant${count}">
      <h3>Participant ${count}</h3>

      <div class="form-group">
          <label for="firstname${count}">First Name</label>
          <input id="firstname${count}" />
      </div>

      <div class="form-group">
          <label for="lastname${count}">Last Name</label>
          <input id="lastname${count}" />
      </div>

      <div class="form-group">
          <label for="fee${count}">Fee</label>
          <input type="number" id="fee${count}" value="0" />
      </div>
  </section>
  `;
}

// Creates success summary output
export function successTemplate(info) {
  return `
  <h2>Thank you, ${info.name}!</h2>
  <p>You have registered ${info.count} participants.</p>
  <p>Total Fees Owed: $${info.total}</p>
  `;
}
