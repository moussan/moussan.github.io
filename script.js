const randomText = `
C%V7&G8*#)b1F+5pX9}Z|D~^eJwYjHkR[NcxM>qKuL|f^]Os=I@U3y6a2{i<0oE4tS-`4
m:bQzT_\"Wg${'$'}A)vx)fN';!,y?l` +
  `;:%M+.p<o[&]#\"!@^*i>Rs_u(k)hGt{j\\}\`{=wY$}BCXFJLZnKa-VEOdqPU/|`;

let matrixText = '';

for (let i = 0; i < 2500; i++) {
  const randomIndex = Math.floor(Math.random() * randomText.length);
  matrixText += randomText[randomIndex];
  if ((i + 1) % 50 === 0) {
    matrixText += '\n';
  }
}

document.getElementById('random-text').textContent = matrixText;
