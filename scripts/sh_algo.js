if (! this.sh_languages) {
  this.sh_languages = {};
}
sh_languages['algo'] = [
  [
    [
      /\b(?:alfa|et|tableau|début|selon|const|div|faire|downto|sinon|fin|faux|fichier|pour|def|fn|get|goto|si|dans|label|mod|new|non|de|ou|pack|packed|page|programme|put|proc|lire|lirenl|enregistrement|répéter|repeter|ouvrir|recreer|ensemble|texte|alors|à|vrai|type|unpack|jusqu|var|tantque|avec|ecrirenl|ecrire)\b/gi,
      'sh_keyword',
      -1
    ],
    [
      /\(\*/g,
      'sh_comment',
      1
    ],
    [
      /\{/g,
      'sh_comment',
      2
    ],
    [
      /\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
      'sh_number',
      -1
    ],
    [
      /"/g,
      'sh_string',
      3
    ],
    // [
    //   /'/g,
    //   'sh_string',
    //   4
    // ],
    [
      /\b(?:booléen|booleen|octet|caractere|caractère|entier|maxint|reel|chaine|entier_long|extended|mot|double|simple)\b/gi,
      'sh_type',
      -1
    ],
    [
      /~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,
      'sh_symbol',
      -1
    ],
    [
      /(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g,
      'sh_function',
      -1
    ]
  ],
  [
    [
      /\*\)/g,
      'sh_comment',
      -2
    ],
    [
      /\(\*/g,
      'sh_comment',
      1
    ]
  ],
  [
    [
      /\}/g,
      'sh_comment',
      -2
    ],
    [
      /\{/g,
      'sh_comment',
      2
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ],
    [
      /\\(?:\\|")/g,
      null,
      -1
    ],
    [
      /"/g,
      'sh_string',
      -2
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ],
    [
      /\\(?:\\|')/g,
      null,
      -1
    ],
    // [
    //   /'/g,
    //   'sh_string',
    //   -2
    // ]
  ]
];