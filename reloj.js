function time() {
  let t = new Date();
  return (
    "Time: " + t.getHours() + "h" + t.getMinutes() + "m" + t.
    getSeconds() + "s" + t.getMilliseconds()
  );
}
setInterval(() => process.stdout.write("\r" + time() + "    "), 90);
console.log("          MI RELOJ\n");
