document.getElementById("exerciseForm").addEventListener("submit", (event) => {
    event.preventDefault();
    startExercise();
    document.getElementById("readyButton").disabled = true;
    document.getElementById("buttonStatus").textContent = "Button is disabled while the timer is running.";
});

function startExercise() {
    const exerciseType = document.getElementById("exerciseType").value;
    const targetReps = parseInt(document.getElementById("targetReps").value);
    let repTimeMinutes = parseFloat(document.getElementById("repTime").value);
    let repTimeSeconds = repTimeMinutes * 60;
    let currentRep = 1;

    function displayTimer() {
        const minutes = Math.floor(repTimeSeconds / 60);
        const seconds = repTimeSeconds % 60;
        document.getElementById("successMessage").style.display = "";
        document.getElementById("exercise").textContent = `Start Exercise: ${exerciseType}`;
        document.getElementById("timer").textContent = `Current Rep: ${currentRep}/${targetReps}, Time Remaining: ${minutes} minutes ${seconds} seconds`;

        if (repTimeSeconds > 0) {
            repTimeSeconds--;
            setTimeout(displayTimer, 1000);
        } else {
            currentRep++;
            if (currentRep > targetReps) {
                document.getElementById("exercise").textContent = "";
                document.getElementById("timer").textContent = "Exercise Finished! You can stop now.";
                resetForm(() => {
                    document.getElementById("successMessage").style.display = "block";
                    document.getElementById("readyButton").disabled = false;
                    document.getElementById("buttonStatus").textContent = "";
                });
                return;
            }
            repTimeMinutes = parseFloat(document.getElementById("repTime").value);
            repTimeSeconds = repTimeMinutes * 60;
            setTimeout(displayTimer, 1000);
        }
    }

    displayTimer();
}

function resetForm(callback) {
    document.getElementById("exerciseType").value = "";
    document.getElementById("targetReps").value = "";
    document.getElementById("repTime").value = "";
    callback(); // Invoke the callback function
}