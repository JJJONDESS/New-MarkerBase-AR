// ============================================================
//  THIS IS THE ONLY FILE YOU EDIT WHEN YOU ADD A NEW DISH
//  Paths must match your GitHub file names EXACTLY (capital letters count!)
// ============================================================

const RESTAURANT = {
  name: 'My Restaurant',       // shown in the browser tab title
  phone: '03160843627',        // "Call waiter" button
  whatsapp: '923160843627'     // WhatsApp needs country code, no "+" and no leading 0 (Pakistan = 92)
};

const DISHES = {
  
  'mcart': {
    name: 'McArt Pizza',                        // <- this name goes in the QR link: ?item=veg-pizza
    price: '', description: '', ingredients: '', allergens: '',
    glb:    'dishes/mcart_small-v1.glb',        // Android marker AR
    glbIos: 'dishes/mcart_ios.glb',             // iPhone only (leave this line out if you made no Step 2 file)
    mind:   'dishes/mcart-targets.mind'
  },

  // ---- NEXT DISH: add a comma after the last "}" above, then copy one block and paste it here ----

};
