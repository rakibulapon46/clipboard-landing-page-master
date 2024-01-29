const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "150px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `#header .logo, #header .header_text,
    #header .button, #details .text2,
    #details .content, #devices .text2,
    #devices .devices_img, #workflow .text2,
    #workflow .features, #brands .brands_img,
    #clipboard .text1, #clipboard .buttons,
    #footer .footer_items
    `,
  { interval: 100 }
);
