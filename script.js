const workouts = [
    {
        date: "FEB 26, 2025",
        title: "My First Run",
        distance: "1.7mi",
        time: "25m - 30m",
        steps: [
            { activity: "WALK", duration: "5 mins walking warm up" },
            { activity: "RUN", duration: "1 min running at a conversational pace" },
            { activity: "WALK", duration: "1.5 mins walking" },
            { activity: "RUN", duration: "1 min running at a conversational pace" },
            { activity: "WALK", duration: "1.5 mins walking" },
            { activity: "RUN", duration: "1 min running at a conversational pace" },
            { activity: "WALK", duration: "1.5 mins walking" },
            { activity: "RUN", duration: "1 min running at a conversational pace" },
            { activity: "WALK", duration: "1.5 mins walking" },
            { activity: "RUN", duration: "1 min running at a conversational pace" },
            { activity: "WALK", duration: "1.5 mins walking" },
            { activity: "RUN", duration: "1 min running at a conversational pace" },
            { activity: "WALK", duration: "5 mins walking cool down" }
        ]
    },
    {
        date: "MAR 1, 2025",
        title: "Gradual Build",
        distance: "1.8mi",
        time: "25m - 30m",
        steps: [
            { activity: "WALK", duration: "5 mins walking warm up" },
            { activity: "RUN", duration: "2 mins running at a conversational pace" },
            { activity: "WALK", duration: "1.5 mins walking" },
            { activity: "RUN", duration: "2 mins running at a conversational pace" },
            { activity: "WALK", duration: "1.5 mins walking" },
            { activity: "RUN", duration: "2 mins running at a conversational pace" },
            { activity: "WALK", duration: "1.5 mins walking" },
            { activity: "RUN", duration: "2 mins running at a conversational pace" },
            { activity: "WALK", duration: "1.5 mins walking" },
            { activity: "RUN", duration: "2 mins running at a conversational pace" },
            { activity: "WALK", duration: "5 mins walking cool down" }
        ]
    }
];

const workoutsList = document.getElementById('workouts');

workouts.forEach((workout, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="workout-info">
            <p><strong>${workout.title}</strong> - ${workout.date}</p>
            <div class="workout-details">
                <p>Distance: ${workout.distance}, Time: ${workout.time}</p>
                <ul>
                    ${workout.steps.map(step => `<li>${step.duration} (${step.activity})</li>`).join('')}
                </ul>
            </div>
        </div>
        <input type="checkbox" id="workout-${index}">
    `;
    workoutsList.appendChild(li);

    const checkbox = document.getElementById(`workout-${index}`);
    const details = li.querySelector('.workout-details');

    li.addEventListener('click', () => {
        if (details.style.display === 'block') {
            details.style.display = 'none';
        } else {
            details.style.display = 'block';
        }
    });

    checkbox.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            li.classList.add('completed-workout');
            createConfetti();
            createSuccessText(li);
        } else {
            li.classList.remove('completed-workout');
        }
    });
});

async function createConfetti() {
    const confetti = await import("https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js");
    confetti.default({
        particleCount: 300,
        spread: 90,
        origin: { x: 1, y: 0.9 },
    });

    confetti.default({
        particleCount: 300,
        spread: 90,
        origin: { x: 0, y: 0.9 },
    });
}

function createSuccessText(element) {
    const text = document.createElement('div');
    text.classList.add('success-text');
    text.textContent = 'You did it!';
    element.appendChild(text);
    text.addEventListener('animationend', () => text.remove());
}