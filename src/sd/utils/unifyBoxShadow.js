export const unifyBoxShadow = (dictionary) => {
  if (dictionary.boxShadow) {
    for (const key of Object.keys(dictionary.boxShadow)) {
      const shadow = dictionary.boxShadow[key];
      if (shadow && shadow.x !== undefined) {
        const x = shadow.x.$value;
        const y = shadow.y.$value;
        const blur = shadow.blur.$value;
        const spread = shadow.spread.$value;
        const color = shadow.color ? shadow.color.$value : '';
        
        dictionary.boxShadow[key] = {
          $value: `${x === 0 ? '0px' : x + 'px'} ${y === 0 ? '0px' : y + 'px'} ${blur === 0 ? '0px' : blur + 'px'} ${spread === 0 ? '0px' : spread + 'px'} ${color}`.trim(),
          $type: 'boxShadow'
        };
      }
    }
  }
};
