<script>
      function change() {
        let currentCity = prompt(“What city do you live in?“);
        let temperature = prompt(“What temperature is it?“);
        let h1 = document.querySelector(“h1”);
        if (temperature >= 0) {
          h1.innerHTML = `:smile: Currently ${temperature}°C in ${currentCity}`;
        } else {
          h1.innerHTML = `:cold_face: Currently ${temperature}°C in ${currentCity}`;
        }
      }
      let changeCityButton = document.querySelector(“button”);
      changeCityButton.addEventListener(“click”, change);
    </script>