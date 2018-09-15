program prog02.pas;
{Décalarations}
var
  nom : string;
  sal : string;
  age : integer;
  genre : char;
  p, h, imc : real;
  ok : boolean;
{P.P}
begin
  Writeln('Donner votre nom : ');
  Readln(nom);

  Writeln('Donner votre age : ');
  Readln(age);

  Writeln('Donner votre genre (G : Garçon, F : Fille) : ');
  Readln(genre);

  Writeln('Donner votre masse en Kg : ');
  Readln(p);

  Writeln('Donner votre taille en m : ');
  Readln(h);

  imc := p / (h * h);
  ok := (imc >= 18) and (imc <= 23);

  if genre in ['G', 'g'] then sal := 'Mr'
  else if genre ['F', 'f'] then sal := 'Mlle/Mme'
  else sal := '';

  Writeln('Bonjour, ', sal, ' ', nom);
  Writeln('Vous aurez bientot ', succ(age), ' ans.');
  Writeln('Votre IMC est ', imc:4:1);
  if ok then
     Writeln('Votre poids est adapté à votre taille!')
  else
     Writen('Vous devez vous mettre au régime!');
  Readln;
end.

