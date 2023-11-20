
// export default async function render(
//     parentNode: FrameNode | PageNode,
//     startX: number,
//     startY: number
//   ): Promise<FrameNode> {
  
//     // FRAME
//     const node_0 = figma.createFrame();
    
//     // append
//     parentNode.appendChild(node_0);
    
//     // layout
//     node_0.resize(1440, 1873);
    
//     node_0.x = startX;
//     node_0.y = startY;
//     node_0.constrainProportions = false;
//     node_0.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_0.layoutAlign = 'INHERIT';
//     node_0.layoutGrow = 0;
//     node_0.layoutPositioning = 'AUTO';
//     node_0.rotation = 0;// antes do frame
    
//     // frame
//     node_0.layoutMode = 'NONE';
//     node_0.primaryAxisSizingMode = 'AUTO';
//     node_0.primaryAxisAlignItems = 'MIN';
//     node_0.counterAxisAlignItems = 'MIN';
//     node_0.counterAxisSizingMode = 'FIXED';
//     node_0.paddingLeft = 0;
//     node_0.paddingRight = 0;
//     node_0.paddingTop = 0;
//     node_0.paddingBottom = 0;
//     node_0.itemSpacing = 0;
    
//     node_0.clipsContent = true;
    
    
//     // base
//     node_0.name = '2';
//     // scene
    
//     // blend
//     node_0.blendMode = 'PASS_THROUGH';
//     node_0.effects = [];
//     node_0.isMask = false;
//     // bglho geometrico
//   node_0.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.965740978717804,"g":0.9876671433448792,"b":1},"boundVariables":{}}]
//   node_0.strokeWeight = 0;
    
//     // retangulinho
//     const node_1 = figma.createRectangle();
    
//     // append
//     node_0.appendChild(node_1);
    
//     // base
//     node_1.name = 'Rectangle 12';
//     // scene
    
//     // layout
//     node_1.resize(1440, 26);
    
//     node_1.x = 0;
//     node_1.y = 25;
//     node_1.constrainProportions = false;
//     node_1.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_1.layoutAlign = 'INHERIT';
//     node_1.layoutGrow = 0;
//     node_1.layoutPositioning = 'AUTO';
//     node_1.rotation = 0;
    
//     // blend
//     node_1.blendMode = 'PASS_THROUGH';
//     node_1.effects = [];
//     node_1.isMask = false;
//     // geometrias
//   node_1.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9287039041519165,"g":0.8574076294898987,"b":1},"boundVariables":{}}]
//   node_1.strokeWeight = 0;
  
//     // retangulinho
//     const node_2 = figma.createRectangle();
    
//     // append
//     node_0.appendChild(node_2);
    
//     // base
//     node_2.name = 'Rectangle 19';
//     // scene
    
//     // layout
//     node_2.resize(1440, 25);
    
//     node_2.x = 0;
//     node_2.y = 0;
//     node_2.constrainProportions = false;
//     node_2.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_2.layoutAlign = 'INHERIT';
//     node_2.layoutGrow = 0;
//     node_2.layoutPositioning = 'AUTO';
//     node_2.rotation = 0;
    
//     // blend
//     node_2.blendMode = 'PASS_THROUGH';
//     node_2.effects = [];
//     node_2.isMask = false;
//     // geometry
//   node_2.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9607843160629272,"g":0.6705882549285889,"b":0.7764706015586853},"boundVariables":{}}]
//   node_2.strokeWeight = 0;
  
//     // regatango
//     const node_3 = figma.createRectangle();
    
//     // append
//     node_0.appendChild(node_3);
    
//     // base
//     node_3.name = 'Rectangle 12';
//     // scene
    
//     // layout
//     node_3.resize(1440, 27);
    
//     node_3.x = 0;
//     node_3.y = 51;
//     node_3.constrainProportions = false;
//     node_3.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_3.layoutAlign = 'INHERIT';
//     node_3.layoutGrow = 0;
//     node_3.layoutPositioning = 'AUTO';
//     node_3.rotation = 0;
    
//     // blend
//     node_3.blendMode = 'PASS_THROUGH';
//     node_3.effects = [];
//     node_3.isMask = false;
//     // geometria
//   node_3.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.7372549176216125,"g":0.9254902005195618,"b":0.9411764740943909},"boundVariables":{}}]
//   node_3.strokeWeight = 0;
  
//     // regutango
//     const node_4 = figma.createRectangle();
    
//     // append
//     node_0.appendChild(node_4);
    
//     // base
//     node_4.name = 'Rectangle 18';
//     // scene
    
//     // layout
//     node_4.resize(1440, 27);
    
//     node_4.x = 98;
//     node_4.y = -108;
//     node_4.constrainProportions = false;
//     node_4.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_4.layoutAlign = 'INHERIT';
//     node_4.layoutGrow = 0;
//     node_4.layoutPositioning = 'AUTO';
//     node_4.rotation = 0;
    
//     // blend
//     node_4.blendMode = 'PASS_THROUGH';
//     node_4.effects = [];
//     node_4.isMask = false;
//     // geometry
//   node_4.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9287039041519165,"g":0.8574076294898987,"b":1},"boundVariables":{}}]
//   node_4.strokeWeight = 0;
  
//     // RECTANGLE
//     const node_5 = figma.createRectangle();
    
//     // append
//     node_0.appendChild(node_5);
    
//     // base
//     node_5.name = 'Rectangle 18';
//     // scene
    
//     // layout
//     node_5.resize(1440, 25);
    
//     node_5.x = 0;
//     node_5.y = 78;
//     node_5.constrainProportions = false;
//     node_5.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_5.layoutAlign = 'INHERIT';
//     node_5.layoutGrow = 0;
//     node_5.layoutPositioning = 'AUTO';
//     node_5.rotation = 0;
    
//     // blend
//     node_5.blendMode = 'PASS_THROUGH';
//     node_5.effects = [];
//     node_5.isMask = false;
//     // geometry
//   node_5.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8588235378265381,"g":0.9529411792755127,"b":0.8509804010391235},"boundVariables":{}}]
//   node_5.strokeWeight = 0;
  
//     // RECTANGLE
//     const node_6 = figma.createRectangle();
    
//     // append
//     node_0.appendChild(node_6);
    
//     // base
//     node_6.name = 'Rectangle 17';
//     // scene
    
//     // layout
//     node_6.resize(795, 460);
    
//     node_6.x = 323;
//     node_6.y = 260;
//     node_6.constrainProportions = false;
//     node_6.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_6.layoutAlign = 'INHERIT';
//     node_6.layoutGrow = 0;
//     node_6.layoutPositioning = 'AUTO';
//     node_6.rotation = 0;
    
//     // blend
//     node_6.blendMode = 'PASS_THROUGH';
//     node_6.effects = [];
//     node_6.isMask = false;
//     // geometry
//   node_6.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.7372549176216125,"g":0.9254902005195618,"b":0.9411764740943909},"boundVariables":{}}]
//   node_6.strokeWeight = 0;
  
//     // TEXT 
//     const node_7 = figma.createText();
    
//     // append
//     node_0.appendChild(node_7);
//     await figma.loadFontAsync({"family":"Roboto","style":"Regular"});
//     node_7.autoRename = true;
//     node_7.fontName = {"family":"Roboto","style":"Regular"};
//     node_7.fontSize = 12;
//     node_7.characters = 'Fotografado por Steven Meisel, Vogue, maio de 2009';
//     node_7.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}];
//     node_7.textCase = 'ORIGINAL';
//     node_7.textDecoration = 'NONE';
//     node_7.letterSpacing = {"unit":"PERCENT","value":0};
//     node_7.lineHeight = {"unit":"AUTO"};
//     node_7.hyperlink = null;
//     node_7.textAlignHorizontal = 'CENTER';
//     node_7.textAlignVertical = 'TOP';
//     node_7.textAutoResize = 'NONE';
//     node_7.paragraphIndent = 0;
//     node_7.paragraphSpacing = 0;
    
//     // base
//     node_7.name = 'Fotografado por Steven Meisel, Vogue, maio de 2009';
//     // scene
    
//     // layout
//     node_7.resize(300, 36);
    
//     node_7.x = 818;
//     node_7.y = 720;
//     node_7.constrainProportions = false;
//     node_7.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_7.layoutAlign = 'INHERIT';
//     node_7.layoutGrow = 0;
//     node_7.layoutPositioning = 'AUTO';
//     node_7.rotation = 0;
    
//     // blend
//     node_7.blendMode = 'PASS_THROUGH';
//     node_7.effects = [];
//     node_7.isMask = false;
//     // geometry
//   node_7.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]
//   node_7.strokeWeight = 0;
  
//     // RECTANGLE
//     const node_8 = figma.createRectangle();
    
//     // append
//     node_0.appendChild(node_8);
    
//     // base
//     node_8.name = 'capa 1';
//     // scene
    
//     // layout
//     node_8.resize(754, 424);
    
//     node_8.x = 344;
//     node_8.y = 277;
//     node_8.constrainProportions = true;
//     node_8.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_8.layoutAlign = 'INHERIT';
//     node_8.layoutGrow = 0;
//     node_8.layoutPositioning = 'AUTO';
//     node_8.rotation = 0;
    
//     // blend
//     node_8.blendMode = 'PASS_THROUGH';
//     node_8.effects = [];
//     node_8.isMask = false;
//     // geometry
//   node_8.fills = [{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FILL","imageTransform":[[1,0,0],[0,1,0]],"scalingFactor":0.5,"rotation":0,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":0,"tint":0,"highlights":0,"shadows":0},"imageHash":"b1b766837afd23ca39139da9f29492187a1d6bb3"}]
//   node_8.strokeWeight = 0;
  
//     // STAR
//     const node_9 = figma.createStar();
    
//     // append
//     node_0.appendChild(node_9);
//     node_9.pointCount = 5;
//     node_9.innerRadius = 0.3819660246372223;
    
//     // base
//     node_9.name = 'Star 3';
    
//     // corner 
//     node_9.cornerRadius = 0;
//     // scene
    
//     // layout
//     node_9.resize(37, 34);
    
//     node_9.x = 939;
//     node_9.y = 155;
//     node_9.constrainProportions = false;
//     node_9.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_9.layoutAlign = 'INHERIT';
//     node_9.layoutGrow = 0;
//     node_9.layoutPositioning = 'AUTO';
//     node_9.rotation = 0;
    
//     // blend
//     node_9.blendMode = 'PASS_THROUGH';
//     node_9.effects = [];
//     node_9.isMask = false;
//     // geometry
//   node_9.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.7625000476837158,"g":0.7625000476837158,"b":0.7625000476837158},"boundVariables":{}}]
//   node_9.strokeWeight = 0;
  
//     // STAR
//     const node_10 = figma.createStar();
    
//     // append
//     node_0.appendChild(node_10);
//     node_10.pointCount = 5;
//     node_10.innerRadius = 0.3819660246372223;
    
//     // base
//     node_10.name = 'Star 4';
    
//     // corner 
//     node_10.cornerRadius = 0;
//     // scene
    
//     // layout
//     node_10.resize(37, 34);
    
//     node_10.x = 1157;
//     node_10.y = 155;
//     node_10.constrainProportions = false;
//     node_10.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_10.layoutAlign = 'INHERIT';
//     node_10.layoutGrow = 0;
//     node_10.layoutPositioning = 'AUTO';
//     node_10.rotation = 0;
    
//     // blend
//     node_10.blendMode = 'PASS_THROUGH';
//     node_10.effects = [];
//     node_10.isMask = false;
//     // geometry
//   node_10.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.7625000476837158,"g":0.7625000476837158,"b":0.7625000476837158},"boundVariables":{}}]
//   node_10.strokeWeight = 0;
  
//     // STAR
//     const node_11 = figma.createStar();
    
//     // append
//     node_0.appendChild(node_11);
//     node_11.pointCount = 5;
//     node_11.innerRadius = 0.3819660246372223;
    
//     // base
//     node_11.name = 'Star 5';
    
//     // corner 
//     node_11.cornerRadius = 0;
//     // scene
    
//     // layout
//     node_11.resize(37, 34);
    
//     node_11.x = 1349;
//     node_11.y = 155;
//     node_11.constrainProportions = false;
//     node_11.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_11.layoutAlign = 'INHERIT';
//     node_11.layoutGrow = 0;
//     node_11.layoutPositioning = 'AUTO';
//     node_11.rotation = 0;
    
//     // blend
//     node_11.blendMode = 'PASS_THROUGH';
//     node_11.effects = [];
//     node_11.isMask = false;
//     // geometry
//   node_11.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.7625000476837158,"g":0.7625000476837158,"b":0.7625000476837158},"boundVariables":{}}]
//   node_11.strokeWeight = 0;
  
//     // STAR
//     const node_12 = figma.createStar();
    
//     // append
//     node_0.appendChild(node_12);
//     node_12.pointCount = 5;
//     node_12.innerRadius = 0.3819660246372223;
    
//     // base
//     node_12.name = 'Star 7';
    
//     // corner 
//     node_12.cornerRadius = 0;
//     // scene
    
//     // layout
//     node_12.resize(37, 34);
    
//     node_12.x = 479;
//     node_12.y = 155;
//     node_12.constrainProportions = false;
//     node_12.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_12.layoutAlign = 'INHERIT';
//     node_12.layoutGrow = 0;
//     node_12.layoutPositioning = 'AUTO';
//     node_12.rotation = 0;
    
//     // blend
//     node_12.blendMode = 'PASS_THROUGH';
//     node_12.effects = [];
//     node_12.isMask = false;
//     // geometry
//   node_12.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.7625000476837158,"g":0.7625000476837158,"b":0.7625000476837158},"boundVariables":{}}]
//   node_12.strokeWeight = 0;
  
//     // STAR
//     const node_13 = figma.createStar();
    
//     // append
//     node_0.appendChild(node_13);
//     node_13.pointCount = 5;
//     node_13.innerRadius = 0.3819660246372223;
    
//     // base
//     node_13.name = 'Star 8';
    
//     // corner 
//     node_13.cornerRadius = 0;
//     // scene
    
//     // layout
//     node_13.resize(37, 34);
    
//     node_13.x = 262;
//     node_13.y = 155;
//     node_13.constrainProportions = false;
//     node_13.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_13.layoutAlign = 'INHERIT';
//     node_13.layoutGrow = 0;
//     node_13.layoutPositioning = 'AUTO';
//     node_13.rotation = 0;
    
//     // blend
//     node_13.blendMode = 'PASS_THROUGH';
//     node_13.effects = [];
//     node_13.isMask = false;
//     // geometry
//   node_13.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.7625000476837158,"g":0.7625000476837158,"b":0.7625000476837158},"boundVariables":{}}]
//   node_13.strokeWeight = 0;
  
//     // STAR
//     const node_14 = figma.createStar();
    
//     // append
//     node_0.appendChild(node_14);
//     node_14.pointCount = 5;
//     node_14.innerRadius = 0.3819660246372223;
    
//     // base
//     node_14.name = 'Star 9';
    
//     // corner 
//     node_14.cornerRadius = 0;
//     // scene
    
//     // layout
//     node_14.resize(37, 34);
    
//     node_14.x = 43;
//     node_14.y = 155;
//     node_14.constrainProportions = false;
//     node_14.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_14.layoutAlign = 'INHERIT';
//     node_14.layoutGrow = 0;
//     node_14.layoutPositioning = 'AUTO';
//     node_14.rotation = 0;
    
//     // blend
//     node_14.blendMode = 'PASS_THROUGH';
//     node_14.effects = [];
//     node_14.isMask = false;
//     // geometry
//   node_14.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.7625000476837158,"g":0.7625000476837158,"b":0.7625000476837158},"boundVariables":{}}]
//   node_14.strokeWeight = 0;
  
//     // STAR
//     const node_15 = figma.createStar();
    
//     // append
//     node_0.appendChild(node_15);
//     node_15.pointCount = 5;
//     node_15.innerRadius = 0.3819660246372223;
    
//     // base
//     node_15.name = 'Star 10';
    
//     // corner 
//     node_15.cornerRadius = 0;
//     // scene
    
//     // layout
//     node_15.resize(37, 34);
    
//     node_15.x = 709;
//     node_15.y = 155;
//     node_15.constrainProportions = false;
//     node_15.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_15.layoutAlign = 'INHERIT';
//     node_15.layoutGrow = 0;
//     node_15.layoutPositioning = 'AUTO';
//     node_15.rotation = 0;
    
//     // blend
//     node_15.blendMode = 'PASS_THROUGH';
//     node_15.effects = [];
//     node_15.isMask = false;
//     // geometry
//   node_15.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.7625000476837158,"g":0.7625000476837158,"b":0.7625000476837158},"boundVariables":{}}]
//   node_15.strokeWeight = 0;
  
//     // TEXT 
//     const node_16 = figma.createText();
    
//     // append
//     node_0.appendChild(node_16);
//     await figma.loadFontAsync({"family":"Girassol","style":"Regular"});
//     node_16.autoRename = true;
//     node_16.fontName = {"family":"Girassol","style":"Regular"};
//     node_16.fontSize = 45;
//     node_16.characters = 'sparkle';
//     node_16.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}];
//     node_16.textCase = 'ORIGINAL';
//     node_16.textDecoration = 'NONE';
//     node_16.letterSpacing = {"unit":"PERCENT","value":0};
//     node_16.lineHeight = {"unit":"AUTO"};
//     node_16.hyperlink = null;
//     node_16.textAlignHorizontal = 'CENTER';
//     node_16.textAlignVertical = 'CENTER';
//     node_16.textAutoResize = 'NONE';
//     node_16.paragraphIndent = 0;
//     node_16.paragraphSpacing = 0;
    
//     // base
//     node_16.name = 'sparkle';
//     // scene
    
//     // layout
//     node_16.resize(147, 34);
    
//     node_16.x = 674;
//     node_16.y = 34;
//     node_16.constrainProportions = false;
//     node_16.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_16.layoutAlign = 'INHERIT';
//     node_16.layoutGrow = 0;
//     node_16.layoutPositioning = 'AUTO';
//     node_16.rotation = 0;
    
//     // blend
//     node_16.blendMode = 'PASS_THROUGH';
//     node_16.effects = [];
//     node_16.isMask = false;
//     // geometry
//   node_16.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]
//   node_16.strokeWeight = 0;
  
//     // RECTANGLE
//     const node_17 = figma.createRectangle();
    
//     // append
//     node_0.appendChild(node_17);
    
//     // base
//     node_17.name = 'icon 1';
//     // scene
    
//     // layout
//     node_17.resize(65, 59);
    
//     node_17.x = 619;
//     node_17.y = 22;
//     node_17.constrainProportions = true;
//     node_17.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_17.layoutAlign = 'INHERIT';
//     node_17.layoutGrow = 0;
//     node_17.layoutPositioning = 'AUTO';
//     node_17.rotation = 0;
    
//     // blend
//     node_17.blendMode = 'PASS_THROUGH';
//     node_17.effects = [];
//     node_17.isMask = false;
//     // geometry
//   node_17.fills = [{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FILL","imageTransform":[[1,0,0],[0,1,0]],"scalingFactor":0.5,"rotation":0,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":0,"tint":0,"highlights":0,"shadows":0},"imageHash":"d0fc8d0d63bb54931a244b482c1c31a59ea23457"}]
//   node_17.strokeWeight = 0;
  
//     // RECTANGLE
//     const node_18 = figma.createRectangle();
    
//     // append
//     node_0.appendChild(node_18);
    
//     // base
//     node_18.name = 'image 1';
//     // scene
    
//     // layout
//     node_18.resize(24, 24);
    
//     node_18.x = 56;
//     node_18.y = 38;
//     node_18.constrainProportions = true;
//     node_18.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_18.layoutAlign = 'INHERIT';
//     node_18.layoutGrow = 0;
//     node_18.layoutPositioning = 'AUTO';
//     node_18.rotation = 0;
    
//     // blend
//     node_18.blendMode = 'PASS_THROUGH';
//     node_18.effects = [];
//     node_18.isMask = false;
//     // geometry
//   node_18.fills = [{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FILL","imageTransform":[[1,0,0],[0,1,0]],"scalingFactor":0.5,"rotation":0,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":0,"tint":0,"highlights":0,"shadows":0},"imageHash":"c80a0ca47b5fb9f99c6fc2afcef9ed434fd95a89"}]
//   node_18.strokeWeight = 0;
  
//     // TEXT 
//     const node_19 = figma.createText();
    
//     // append
//     node_0.appendChild(node_19);
//     await figma.loadFontAsync({"family":"Playfair Display SC","style":"Regular"});
//     node_19.autoRename = true;
//     node_19.fontName = {"family":"Playfair Display SC","style":"Regular"};
//     node_19.fontSize = 50;
//     node_19.characters = 'faça a moda acontecer';
//     node_19.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}];
//     node_19.textCase = 'ORIGINAL';
//     node_19.textDecoration = 'NONE';
//     node_19.letterSpacing = {"unit":"PERCENT","value":0};
//     node_19.lineHeight = {"unit":"AUTO"};
//     node_19.hyperlink = null;
//     node_19.textAlignHorizontal = 'CENTER';
//     node_19.textAlignVertical = 'TOP';
//     node_19.textAutoResize = 'NONE';
//     node_19.paragraphIndent = 0;
//     node_19.paragraphSpacing = 0;
    
//     // base
//     node_19.name = 'faça a moda acontecer';
//     // scene
    
//     // layout
//     node_19.resize(946, 142);
    
//     node_19.x = 266;
//     node_19.y = 779;
//     node_19.constrainProportions = false;
//     node_19.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_19.layoutAlign = 'INHERIT';
//     node_19.layoutGrow = 0;
//     node_19.layoutPositioning = 'AUTO';
//     node_19.rotation = 0;
    
//     // blend
//     node_19.blendMode = 'PASS_THROUGH';
//     node_19.effects = [];
//     node_19.isMask = false;
//     // geometry
//   node_19.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]
//   node_19.strokeWeight = 0;
  
//     // TEXT 
//     const node_20 = figma.createText();
    
//     // append
//     node_0.appendChild(node_20);
//     await figma.loadFontAsync({"family":"Nunito Sans","style":"Regular"});
//     node_20.autoRename = true;
//     node_20.fontName = {"family":"Nunito Sans","style":"Regular"};
//     node_20.fontSize = Symbol(figma.mixed);
//     node_20.characters = 'Seu closet na palma da sua mão,  escolher o look nunca foi tão fácil!'
  
  
//     'Faça upload de suas roupas e seu guarda roupa inteligente irá montar a combinação perfeita para você.'
//     node_20.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}];
//     node_20.textCase = 'ORIGINAL';
//     node_20.textDecoration = 'NONE';
//     node_20.letterSpacing = {"unit":"PERCENT","value":0};
//     node_20.lineHeight = {"unit":"AUTO"};
//     node_20.hyperlink = null;
//     node_20.textAlignHorizontal = 'CENTER';
//     node_20.textAlignVertical = 'TOP';
//     node_20.textAutoResize = 'NONE';
//     node_20.paragraphIndent = 0;
//     node_20.paragraphSpacing = 0;
    
//     // base
//     node_20.name = 'Seu closet na palma da sua mão, escolher o look nunca foi tão fácil! Faça upload de suas roupas e seu guarda roupa inteligente irá montar a combinação perfeita para você.';
//     // scene
    
//     // layout
//     node_20.resize(1056, 279);
    
//     node_20.x = 200;
//     node_20.y = 930;
//     node_20.constrainProportions = false;
//     node_20.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_20.layoutAlign = 'INHERIT';
//     node_20.layoutGrow = 0;
//     node_20.layoutPositioning = 'AUTO';
//     node_20.rotation = 0;
    
//     // blend
//     node_20.blendMode = 'PASS_THROUGH';
//     node_20.effects = [];
//     node_20.isMask = false;
//     // geometry
//   node_20.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]
//   node_20.strokeWeight = 0;
  
//     // RECTANGLE
//     const node_21 = figma.createRectangle();
    
//     // append
//     node_0.appendChild(node_21);
    
//     // base
//     node_21.name = 'imageup 1';
//     // scene
    
//     // layout
//     node_21.resize(160, 129);
    
//     node_21.x = 146;
//     node_21.y = 1257;
//     node_21.constrainProportions = true;
//     node_21.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_21.layoutAlign = 'INHERIT';
//     node_21.layoutGrow = 0;
//     node_21.layoutPositioning = 'AUTO';
//     node_21.rotation = 0;
    
//     // blend
//     node_21.blendMode = 'PASS_THROUGH';
//     node_21.effects = [];
//     node_21.isMask = false;
//     // geometry
//   node_21.fills = [{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FILL","imageTransform":[[1,0,0],[0,1,0]],"scalingFactor":0.5,"rotation":0,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":0,"tint":0,"highlights":0,"shadows":0},"imageHash":"59768e50954607c0df91b453e09ee2f1a086a992"}]
//   node_21.strokeWeight = 0;
  
//     // GROUP
//     const node_22 = figma.createFrame();
    
//     // append
//     node_0.appendChild(node_22);
    
//     // layout
//     node_22.resize(244, 71);
    
//     node_22.x = 612;
//     node_22.y = 1620;
//     node_22.constrainProportions = false;
    
//     node_22.layoutAlign = 'INHERIT';
//     node_22.layoutGrow = 0;
//     node_22.layoutPositioning = 'AUTO';
//     node_22.rotation = 0;
    
//     // base
//     node_22.name = 'Group 5';
    
//     // blend
//     node_22.blendMode = 'PASS_THROUGH';
//     node_22.effects = [];
//     node_22.isMask = false;
//     // scene
    
//     // RECTANGLE
//     const node_23 = figma.createRectangle();
    
//     // append
//     node_22.appendChild(node_23);
    
//     // base
//     node_23.name = 'Rectangle 20';
//     // scene
    
//     // layout
//     node_23.resize(244, 71);
    
//     node_23.x = 612;
//     node_23.y = 1620;
//     node_23.constrainProportions = false;
//     node_23.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_23.layoutAlign = 'INHERIT';
//     node_23.layoutGrow = 0;
//     node_23.layoutPositioning = 'AUTO';
//     node_23.rotation = 0;
    
//     // blend
//     node_23.blendMode = 'PASS_THROUGH';
//     node_23.effects = [{"type":"DROP_SHADOW","color":{"r":0,"g":0,"b":0,"a":0.25},"offset":{"x":0,"y":4},"radius":4,"spread":0,"visible":true,"blendMode":"NORMAL","showShadowBehindNode":false}];
//     node_23.isMask = false;
//     // geometry
//   node_23.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9607843160629272,"g":0.6705882549285889,"b":0.7764706015586853},"boundVariables":{}}]
//   node_23.strokeWeight = 0;
  
//     // TEXT 
//     const node_24 = figma.createText();
    
//     // append
//     node_22.appendChild(node_24);
//     await figma.loadFontAsync({"family":"Nunito Sans","style":"Regular"});
//     node_24.autoRename = true;
//     node_24.fontName = {"family":"Nunito Sans","style":"Regular"};
//     node_24.fontSize = 34;
//     node_24.characters = 'Combinar';
//     node_24.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}];
//     node_24.textCase = 'ORIGINAL';
//     node_24.textDecoration = 'NONE';
//     node_24.letterSpacing = {"unit":"PERCENT","value":0};
//     node_24.lineHeight = {"unit":"AUTO"};
//     node_24.hyperlink = null;
//     node_24.textAlignHorizontal = 'CENTER';
//     node_24.textAlignVertical = 'TOP';
//     node_24.textAutoResize = 'NONE';
//     node_24.paragraphIndent = 0;
//     node_24.paragraphSpacing = 0;
    
//     // base
//     node_24.name = 'Combinar';
//     // scene
    
//     // layout
//     node_24.resize(161, 38);
    
//     node_24.x = 653;
//     node_24.y = 1637;
//     node_24.constrainProportions = false;
//     node_24.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_24.layoutAlign = 'INHERIT';
//     node_24.layoutGrow = 0;
//     node_24.layoutPositioning = 'AUTO';
//     node_24.rotation = 0;
    
//     // blend
//     node_24.blendMode = 'PASS_THROUGH';
//     node_24.effects = [];
//     node_24.isMask = false;
//     // geometry
//   node_24.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]
//   node_24.strokeWeight = 0;
  
//     // TEXT 
//     const node_25 = figma.createText();
    
//     // append
//     node_0.appendChild(node_25);
//     await figma.loadFontAsync({"family":"Nunito Sans","style":"Regular"});
//     node_25.autoRename = true;
//     node_25.fontName = {"family":"Nunito Sans","style":"Regular"};
//     node_25.fontSize = 34;
//     node_25.characters = 'Peça de Cima';
//     node_25.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}];
//     node_25.textCase = 'ORIGINAL';
//     node_25.textDecoration = 'NONE';
//     node_25.letterSpacing = {"unit":"PERCENT","value":0};
//     node_25.lineHeight = {"unit":"AUTO"};
//     node_25.hyperlink = null;
//     node_25.textAlignHorizontal = 'CENTER';
//     node_25.textAlignVertical = 'TOP';
//     node_25.textAutoResize = 'NONE';
//     node_25.paragraphIndent = 0;
//     node_25.paragraphSpacing = 0;
    
//     // base
//     node_25.name = 'Peça de Cima';
//     // scene
    
//     // layout
//     node_25.resize(224, 46);
    
//     node_25.x = 114;
//     node_25.y = 1453;
//     node_25.constrainProportions = false;
//     node_25.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_25.layoutAlign = 'INHERIT';
//     node_25.layoutGrow = 0;
//     node_25.layoutPositioning = 'AUTO';
//     node_25.rotation = 0;
    
//     // blend
//     node_25.blendMode = 'PASS_THROUGH';
//     node_25.effects = [];
//     node_25.isMask = false;
//     // geometry
//   node_25.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]
//   node_25.strokeWeight = 0;
  
//     // TEXT 
//     const node_26 = figma.createText();
    
//     // append
//     node_0.appendChild(node_26);
//     await figma.loadFontAsync({"family":"Nunito Sans","style":"Regular"});
//     node_26.autoRename = true;
//     node_26.fontName = {"family":"Nunito Sans","style":"Regular"};
//     node_26.fontSize = 34;
//     node_26.characters = 'Peça de Baixo';
//     node_26.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}];
//     node_26.textCase = 'ORIGINAL';
//     node_26.textDecoration = 'NONE';
//     node_26.letterSpacing = {"unit":"PERCENT","value":0};
//     node_26.lineHeight = {"unit":"AUTO"};
//     node_26.hyperlink = null;
//     node_26.textAlignHorizontal = 'CENTER';
//     node_26.textAlignVertical = 'TOP';
//     node_26.textAutoResize = 'NONE';
//     node_26.paragraphIndent = 0;
//     node_26.paragraphSpacing = 0;
    
//     // base
//     node_26.name = 'Peça de Baixo';
//     // scene
    
//     // layout
//     node_26.resize(224, 46);
    
//     node_26.x = 474;
//     node_26.y = 1453;
//     node_26.constrainProportions = false;
//     node_26.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_26.layoutAlign = 'INHERIT';
//     node_26.layoutGrow = 0;
//     node_26.layoutPositioning = 'AUTO';
//     node_26.rotation = 0;
    
//     // blend
//     node_26.blendMode = 'PASS_THROUGH';
//     node_26.effects = [];
//     node_26.isMask = false;
//     // geometry
//   node_26.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]
//   node_26.strokeWeight = 0;
  
//     // TEXT 
//     const node_27 = figma.createText();
    
//     // append
//     node_0.appendChild(node_27);
//     await figma.loadFontAsync({"family":"Nunito Sans","style":"Regular"});
//     node_27.autoRename = true;
//     node_27.fontName = {"family":"Nunito Sans","style":"Regular"};
//     node_27.fontSize = 34;
//     node_27.characters = 'Calçado';
//     node_27.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}];
//     node_27.textCase = 'ORIGINAL';
//     node_27.textDecoration = 'NONE';
//     node_27.letterSpacing = {"unit":"PERCENT","value":0};
//     node_27.lineHeight = {"unit":"AUTO"};
//     node_27.hyperlink = null;
//     node_27.textAlignHorizontal = 'CENTER';
//     node_27.textAlignVertical = 'TOP';
//     node_27.textAutoResize = 'NONE';
//     node_27.paragraphIndent = 0;
//     node_27.paragraphSpacing = 0;
    
//     // base
//     node_27.name = 'Calçado';
//     // scene
    
//     // layout
//     node_27.resize(224, 46);
    
//     node_27.x = 805;
//     node_27.y = 1455;
//     node_27.constrainProportions = false;
//     node_27.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_27.layoutAlign = 'INHERIT';
//     node_27.layoutGrow = 0;
//     node_27.layoutPositioning = 'AUTO';
//     node_27.rotation = 0;
    
//     // blend
//     node_27.blendMode = 'PASS_THROUGH';
//     node_27.effects = [];
//     node_27.isMask = false;
//     // geometry
//   node_27.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]
//   node_27.strokeWeight = 0;
  
//     // RECTANGLE
//     const node_28 = figma.createRectangle();
    
//     // append
//     node_0.appendChild(node_28);
    
//     // base
//     node_28.name = 'imageup 2';
//     // scene
    
//     // layout
//     node_28.resize(160, 129);
    
//     node_28.x = 506;
//     node_28.y = 1256;
//     node_28.constrainProportions = true;
//     node_28.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_28.layoutAlign = 'INHERIT';
//     node_28.layoutGrow = 0;
//     node_28.layoutPositioning = 'AUTO';
//     node_28.rotation = 0;
    
//     // blend
//     node_28.blendMode = 'PASS_THROUGH';
//     node_28.effects = [];
//     node_28.isMask = false;
//     // geometry
//   node_28.fills = [{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FILL","imageTransform":[[1,0,0],[0,1,0]],"scalingFactor":0.5,"rotation":0,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":0,"tint":0,"highlights":0,"shadows":0},"imageHash":"59768e50954607c0df91b453e09ee2f1a086a992"}]
//   node_28.strokeWeight = 0;
  
//     // RECTANGLE
//     const node_29 = figma.createRectangle();
    
//     // append
//     node_0.appendChild(node_29);
    
//     // base
//     node_29.name = 'imageup 3';
//     // scene
    
//     // layout
//     node_29.resize(160, 129);
    
//     node_29.x = 846;
//     node_29.y = 1256;
//     node_29.constrainProportions = true;
//     node_29.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_29.layoutAlign = 'INHERIT';
//     node_29.layoutGrow = 0;
//     node_29.layoutPositioning = 'AUTO';
//     node_29.rotation = 0;
    
//     // blend
//     node_29.blendMode = 'PASS_THROUGH';
//     node_29.effects = [];
//     node_29.isMask = false;
//     // geometry
//   node_29.fills = [{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FILL","imageTransform":[[1,0,0],[0,1,0]],"scalingFactor":0.5,"rotation":0,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":0,"tint":0,"highlights":0,"shadows":0},"imageHash":"59768e50954607c0df91b453e09ee2f1a086a992"}]
//   node_29.strokeWeight = 0;
  
//     // RECTANGLE
//     const node_30 = figma.createRectangle();
    
//     // append
//     node_0.appendChild(node_30);
    
//     // base
//     node_30.name = 'imageup 4';
//     // scene
    
//     // layout
//     node_30.resize(160, 129);
    
//     node_30.x = 1172;
//     node_30.y = 1257;
//     node_30.constrainProportions = true;
//     node_30.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_30.layoutAlign = 'INHERIT';
//     node_30.layoutGrow = 0;
//     node_30.layoutPositioning = 'AUTO';
//     node_30.rotation = 0;
    
//     // blend
//     node_30.blendMode = 'PASS_THROUGH';
//     node_30.effects = [];
//     node_30.isMask = false;
//     // geometry
//   node_30.fills = [{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FILL","imageTransform":[[1,0,0],[0,1,0]],"scalingFactor":0.5,"rotation":0,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":0,"tint":0,"highlights":0,"shadows":0},"imageHash":"59768e50954607c0df91b453e09ee2f1a086a992"}]
//   node_30.strokeWeight = 0;
  
//     // TEXT 
//     const node_31 = figma.createText();
    
//     // append
//     node_0.appendChild(node_31);
//     await figma.loadFontAsync({"family":"Nunito Sans","style":"Regular"});
//     node_31.autoRename = true;
//     node_31.fontName = {"family":"Nunito Sans","style":"Regular"};
//     node_31.fontSize = 34;
//     node_31.characters = 'Acessório';
//     node_31.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}];
//     node_31.textCase = 'ORIGINAL';
//     node_31.textDecoration = 'NONE';
//     node_31.letterSpacing = {"unit":"PERCENT","value":0};
//     node_31.lineHeight = {"unit":"AUTO"};
//     node_31.hyperlink = null;
//     node_31.textAlignHorizontal = 'CENTER';
//     node_31.textAlignVertical = 'TOP';
//     node_31.textAutoResize = 'NONE';
//     node_31.paragraphIndent = 0;
//     node_31.paragraphSpacing = 0;
    
//     // base
//     node_31.name = 'Acessório';
//     // scene
    
//     // layout
//     node_31.resize(224, 46);
    
//     node_31.x = 1140;
//     node_31.y = 1453;
//     node_31.constrainProportions = false;
//     node_31.constraints = {"horizontal":"MIN","vertical":"MIN"};
//     node_31.layoutAlign = 'INHERIT';
//     node_31.layoutGrow = 0;
//     node_31.layoutPositioning = 'AUTO';
//     node_31.rotation = 0;
    
//     // blend
//     node_31.blendMode = 'PASS_THROUGH';
//     node_31.effects = [];
//     node_31.isMask = false;
//     // geometry
//   node_31.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]
//   node_31.strokeWeight = 0;
//     return node_0;// return root
//   }