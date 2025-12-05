const SUPABASE_URL = "https://udeqnmaywfvulzvcxzjx.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkZXFubWF5d2Z2dWx6dmN4emp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5MTYzNTYsImV4cCI6MjA3NzQ5MjM1Nn0.Tb9CvFCudK5JKfF_nFgI3fM0WoFuWUk120HW54JtTwI"; // no uses publishable

console.log("probando script");

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function cargarDatos() {
  const { data, error } = await supabase
    .from("datos_rgb")
    .select("id, created_at, R, G, B, HEX");

  console.log("Datos desde Supabase:", data, error);

  const contenedor = document.getElementById("resultado");
  contenedor.innerHTML = "";

  if (error) {
    contenedor.innerHTML = "Error cargando datos.";
    return;
  }

  data.forEach((item) => {
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = `ID: ${item.id} | R: ${item.R} | G: ${item.G} | B: ${item.B} | HEX: ${item.HEX}`;
    contenedor.appendChild(div);
  });
}

cargarDatos();
