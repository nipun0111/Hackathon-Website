

<script>
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
</script>
<section id="register" class="register-section">
    <h2>Register Now</h2>
    <p>Don’t miss out! Register your team today to secure your spot in the competition.</p>
    <form id="registrationForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        
        <label for="teamName">Team Name:</label>
        <input type="text" id="teamName" name="teamName" required>
        
        <label for="members">Team Members:</label>
        <input type="number" id="members" name="members" min="1" required>

        <button type="submit">Submit</button>
    </form>
    <p id="successMessage" style="display:none; color: green;">Thank you for registering!</p>
</section>



<script>
    
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents form from submitting the traditional way

        // Form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const teamName = document.getElementById('teamName').value;
        const members = document.getElementById('members').value;

        if (name && email && teamName && members > 0) {
            // Show success message
            document.getElementById('successMessage').style.display = 'block';

            // Reset form
            document.getElementById('registrationForm').reset();

            // Optional: send form data to a server or API here

        } else {
            alert('Please fill in all fields correctly.');
        }
    });
</script>

