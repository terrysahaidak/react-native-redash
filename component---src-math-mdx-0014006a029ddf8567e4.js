(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8PA3":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return p}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk");var a=t("/FXl"),b=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/math.mdx"}});var i={_frontmatter:l},c=b.a;function p(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,b={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(b[t]=e[t]);return b}(e,["components"]);return Object(a.b)(c,r({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"math"},"Math"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"bin"},Object(a.b)("inlineCode",{parentName:"h2"},"bin()")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-tsx"}),"const bin: (value: boolean) => 0 | 1\n")),Object(a.b)("p",null,"Convert a boolean value into a number.\nThis can be useful in reanimated since 0 and 1 are used for conditional statements."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"fract"},Object(a.b)("inlineCode",{parentName:"h2"},"fract()")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-tsx"}),"const fract: (x: Animated.Adaptable<number>) => Animated.Node<number>;\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"fract")," returns the fractional part of ",Object(a.b)("inlineCode",{parentName:"p"},"x"),". This is calculated as ",Object(a.b)("inlineCode",{parentName:"p"},"x - floor(x)"),"."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"inc"},Object(a.b)("inlineCode",{parentName:"h2"},"inc()")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-tsx"}),"const inc: (value: Animated.Value<number>) => Animated.Node<number>\n")),Object(a.b)("p",null,"Increment value by one."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"dec"},Object(a.b)("inlineCode",{parentName:"h2"},"dec()")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-tsx"}),"const dec: (value: Animated.Value<number>) => Animated.Node<number>;\n")),Object(a.b)("p",null,"Decrement value by one."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"torad"},Object(a.b)("inlineCode",{parentName:"h2"},"toRad()")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-tsx"}),"const toRad: (deg: Animated.Adaptable<number>) => Animated.Node<number>;\n")),Object(a.b)("p",null,"Transforms an angle from degrees to radians."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"todeg"},Object(a.b)("inlineCode",{parentName:"h2"},"toDeg()")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-tsx"}),"const toDeg: (rad: Animated.Adaptable<number>) => Animated.Node<number>;\n")),Object(a.b)("p",null,"Transforms an angle from radians to degrees."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"min"},Object(a.b)("inlineCode",{parentName:"h2"},"min()")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-tsx"}),"const min: (...args: Animated.Adaptable<number>[]) => Animated.Adaptable<number>;\n")),Object(a.b)("p",null,"Takes one or more nodes as input and returns the minimum of all the node's values.\nThis is equivalent to ",Object(a.b)("inlineCode",{parentName:"p"},"Animated.min")," but with support for more than two parameters."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"max"},Object(a.b)("inlineCode",{parentName:"h2"},"max()")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-tsx"}),"const max: (...args: Animated.Adaptable<number>[]) => Animated.Adaptable<number>;\n")),Object(a.b)("p",null,"Takes one or more nodes as input and returns the maximum of all the node's values.\nThis is equivalent to ",Object(a.b)("inlineCode",{parentName:"p"},"Animated.min")," but with support for more than two parameters."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"clamp"},Object(a.b)("inlineCode",{parentName:"h2"},"clamp()")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-tsx"}),"const clamp: (value: Animated.Adaptable<number>, lowerBound: Animated.Adaptable<number>, upperBound: Animated.Adaptable<number>) => Animated.Node<number>;\n")),Object(a.b)("p",null,"Clamps a node with a lower and upper bound."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-tsx"}),"clamp(new Value(-1), 0, 100); // 0\nclamp(new Value(1), 0, 100); // 1\nclamp(new Value(101), 0, 100); // 100\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"between"},Object(a.b)("inlineCode",{parentName:"h2"},"between()")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-tsx"}),"const between: (value: Animated.Node<number>, lowerBound: Animated.Adaptable<number>, upperBound: Animated.Adaptable<number>, inclusive?: boolean) => Animated.Node<0 | 1>;\n")),Object(a.b)("p",null,"Returns true if ",Object(a.b)("inlineCode",{parentName:"p"},"node")," is within ",Object(a.b)("inlineCode",{parentName:"p"},"lowerBound")," and ",Object(a.b)("inlineCode",{parentName:"p"},"upperBound"),"."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"approximates"},Object(a.b)("inlineCode",{parentName:"h2"},"approximates()")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-tsx"}),"const approximates: (a: Animated.Adaptable<number>, b: Animated.Adaptable<number>, precision?: Animated.Adaptable<number>) => Animated.Node<0 | 1>;\n")),Object(a.b)("p",null,"Returns 1 if the difference between the two values is less than precision.\nOtherwise returns 0.\nDefault value for the precision is 0.001."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"atan2"},Object(a.b)("inlineCode",{parentName:"h2"},"atan2()")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-tsx"}),"const atan2: (y: Animated.Adaptable<number>, x: Animated.Adaptable<number>) => Animated.Node<number>;\n")),Object(a.b)("p",null,"Returns the angle in the plane (in radians) between the positive x-axis and the ray from (0,0) to the point (x,y), ",Object(a.b)("inlineCode",{parentName:"p"},"atan2(y,x)"),"."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"round"},Object(a.b)("inlineCode",{parentName:"h2"},"round()")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-tsx"}),"const round = (value: Animated.Adaptable<number>, precision: Animated.Adaptable<number> = 0)  => Animated.Node<number>;\n")),Object(a.b)("p",null,"Computes animation node rounded to ",Object(a.b)("inlineCode",{parentName:"p"},"precision"),"."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"cubicbezier"},Object(a.b)("inlineCode",{parentName:"h2"},"cubicBezier()")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-tsx"}),"const cubicBezier: (t: Animated.Adaptable<number>, p0: Animated.Adaptable<number>, p1: Animated.Adaptable<number>, p2: Animated.Adaptable<number>, p3: Animated.Adaptable<number>) => Animated.Node<number>;\n")),Object(a.b)("p",null,"Returns the coordinate of a cubic bezier curve.\n",Object(a.b)("inlineCode",{parentName:"p"},"t")," is the length of the curve from 0 to 1. ",Object(a.b)("inlineCode",{parentName:"p"},"cubicBezier(0, p0, p1, p2, p3)")," equals ",Object(a.b)("inlineCode",{parentName:"p"},"p0")," and ",Object(a.b)("inlineCode",{parentName:"p"},"cubicBezier(1, p0, p1, p2, p3)")," equals ",Object(a.b)("inlineCode",{parentName:"p"},"p3"),".\n",Object(a.b)("inlineCode",{parentName:"p"},"p0")," and ",Object(a.b)("inlineCode",{parentName:"p"},"p3")," are respectively the starting and ending point of the curve.\n",Object(a.b)("inlineCode",{parentName:"p"},"p1")," and ",Object(a.b)("inlineCode",{parentName:"p"},"p2")," are the control points."))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/math.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-math-mdx-0014006a029ddf8567e4.js.map