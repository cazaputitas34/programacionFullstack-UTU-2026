async function traerChiste() {
  const categoria = document.getElementById('categoria').value;
  const idioma = document.getElementById('idioma').value;

  document.getElementById('chiste').textContent = '⏳ Cargando...';
  document.getElementById('error').textContent = '';

  try {
    const res = await fetch(`https://v2.jokeapi.dev/joke/${categoria}?lang=${idioma}`);
    const datos = await res.json();

    if (datos.error) throw new Error();

    let texto;
    if (datos.type === 'single') {
      texto = datos.joke;
    } else {
      texto = `<b>${datos.setup}</b><br><br>${datos.delivery}`;
    }

    if (!texto || texto.includes('undefined')) throw new Error();

    document.getElementById('chiste').innerHTML = texto;

  } catch {
    document.getElementById('chiste').textContent = '';
    document.getElementById('error').textContent = 'Esta categoría no está disponible en ese idioma. Probá con inglés.';
  }
}
