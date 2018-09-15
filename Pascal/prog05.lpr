program prog05;
var
  cmaj, cmin : char;
begin
  Write('Entrer une lettre majuscule : ');
  Readln(cmaj);

  cmin := Chr(Ord(cmaj) + 32);

  Writeln('Miniscule("', cmaj, '") = "', cmin, '"');
  Readln;
end.

