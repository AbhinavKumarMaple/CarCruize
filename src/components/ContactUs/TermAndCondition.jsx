import React from "react";

const TermAndCondition = () => {
  const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget placerat ipsum, id porttitor eros. Aliquam non ex nec mauris aliquet suscipit. Morbi pretium erat nec ex vestibulum, vel malesuada urna euismod. Quisque vel lacinia neque, in commodo turpis. Integer quis pharetra nisl. Pellentesque sit amet commodo augue. Sed ut feugiat lectus. Sed ut libero in ex commodo commodo. Nam at leo ac eros facilisis fringilla.",
    "Vestibulum blandit tincidunt velit, eu convallis quam accumsan sed. Duis eget mauris urna. In a nisl quam. Etiam lobortis, dui vitae ultrices commodo, orci felis ultrices metus, vel auctor leo purus eget tellus. Sed ac arcu ullamcorper, vestibulum metus in, aliquam urna. Nullam commodo purus et enim euismod, a luctus velit tincidunt. Vestibulum dictum ultricies dolor, at volutpat sapien faucibus vel. Praesent sit amet lectus vitae est varius feugiat. ",
    "Pellentesque vel risus at sapien iaculis rhoncus ac vel ipsum. Sed fermentum urna quis arcu posuere tincidunt. Donec at urna sit amet orci dapibus placerat. In hac habitasse platea dictumst. Ut in augue eget diam maximus consequat vel a dui. Curabitur rutrum lectus nibh, quis hendrerit ante malesuada quis. Sed in turpis id velit ultricies fermentum nec sit amet metus. Fusce commodo ipsum eget nulla dictum, non feugiat metus hendrerit. ",
    "Maecenas auctor urna vel purus varius, in egestas mauris bibendum. Curabitur non magna eget neque pellentesque semper. Vestibulum faucibus hendrerit commodo. Donec commodo ex ut arcu lobortis, id luctus elit iaculis. Sed vel nulla quis velit bibendum interdum quis ac quam. Etiam commodo velit et erat rutrum, ut consectetur magna pretium. Fusce nec tortor ac mi malesuada consectetur. Praesent ac pharetra nulla, a molestie est. ",
    "Sed vitae erat nec tortor bibendum molestie. Aenean malesuada, ipsum at luctus commodo, sapien est semper turpis, vel dictum purus dui ut massa. Sed id enim in tellus malesuada eleifend. Sed ut massa eu augue blandit malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam porta ultricies erat quis aliquet. Fusce faucibus augue risus, in pharetra metus pretium sed. Nam vitae ex dolor.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget placerat ipsum, id porttitor eros. Aliquam non ex nec mauris aliquet suscipit. Morbi pretium erat nec ex vestibulum, vel malesuada urna euismod. Quisque vel lacinia neque, in commodo turpis. Integer quis pharetra nisl. Pellentesque sit amet commodo augue. Sed ut feugiat lectus. Sed ut libero in ex commodo commodo. Nam at leo ac eros facilisis fringilla.",
    "Vestibulum blandit tincidunt velit, eu convallis quam accumsan sed. Duis eget mauris urna. In a nisl quam. Etiam lobortis, dui vitae ultrices commodo, orci felis ultrices metus, vel auctor leo purus eget tellus. Sed ac arcu ullamcorper, vestibulum metus in, aliquam urna. Nullam commodo purus et enim euismod, a luctus velit tincidunt. Vestibulum dictum ultricies dolor, at volutpat sapien faucibus vel. Praesent sit amet lectus vitae est varius feugiat. ",
    "Pellentesque vel risus at sapien iaculis rhoncus ac vel ipsum. Sed fermentum urna quis arcu posuere tincidunt. Donec at urna sit amet orci dapibus placerat. In hac habitasse platea dictumst. Ut in augue eget diam maximus consequat vel a dui. Curabitur rutrum lectus nibh, quis hendrerit ante malesuada quis. Sed in turpis id velit ultricies fermentum nec sit amet metus. Fusce commodo ipsum eget nulla dictum, non feugiat metus hendrerit. ",
    "Maecenas auctor urna vel purus varius, in egestas mauris bibendum. Curabitur non magna eget neque pellentesque semper. Vestibulum faucibus hendrerit commodo. Donec commodo ex ut arcu lobortis, id luctus elit iaculis. Sed vel nulla quis velit bibendum interdum quis ac quam. Etiam commodo velit et erat rutrum, ut consectetur magna pretium. Fusce nec tortor ac mi malesuada consectetur. Praesent ac pharetra nulla, a molestie est.",
    "Praesent et eros sit amet elit eleifend sagittis at at nisl. Nulla vel enim quam. Fusce facilisis ex a felis ultricies imperdiet. Sed mollis justo elit, vel tincidunt nunc volutpat vitae. Donec lobortis elementum nulla, in convallis enim lacinia vel. Proin lobortis consequat erat, eget aliquet sem ultrices vel. Nullam vehicula quam quis augue",
  ];

  return (
    <div className="bg-black px-44 text-white">
      <div className="  ">
        <h1 className="text-center text-4xl font-bold py-5">Privacy Policy</h1>
      </div>
      <div className="space-y-5">{paragraphs.map((item) =>(
        <p className="text-center">{item}</p>
      ))}</div>
    </div>
  );
};

export default TermAndCondition;
