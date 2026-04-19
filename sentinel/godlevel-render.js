// RENDER QUEUE · INFINITY-CORE-ENGINE
// Local queue simulation. Backend will replace this once connected.

(function () {
  const queue = [];
  let processing = false;

  function log(msg) {
    console.log(
      "%cRENDER QUEUE · " + msg,
      "color:#4be3ff;font-weight:bold;font-size:12px;"
    );
  }

  // Add job to local queue
  function enqueue(job) {
    queue.push(job);
    log("Job queued: " + job.id);
    processQueue();
  }

  // Process queue (simulated)
  async function processQueue() {
    if (processing) return;
    if (queue.length === 0) return;

    processing = true;
    const job = queue.shift();

    log("Processing job: " + job.id);

    await simulateWork(job);

    log("Job complete: " + job.id);
    processing = false;

    // Continue if more jobs
    if (queue.length > 0) processQueue();
  }

  // Fake render work
  async function simulateWork(job
