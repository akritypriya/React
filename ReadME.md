#React Notes 

#Bundlers:
A bundler is a tool that bundles our app, packages our app so that it can be shipped to production.eg-webpack,parcel,vite

#package.json:
Package.json file is a configuration for NPM. Whatever packages our project needs, we install those packages using
npm install <packageName>.

Once package installation is complete, their versions and configuration related information is stored as dependencies inside package.json file

#package-lock.json:
Package-lock.json locks the exact version of packages being
used in the project.


 #Parcel -Bundles the code
-Dev Build
-Local server
-HMR=Hot Module Replacement
-File watching Algorithm -Written in C++
-Caching-Faster Builds
-Image Optimization
-Minification
-Bundling
-Compressing
-Consistent Hashing
-code splitting
-Differential Bundling-supports older browsers
-Diagnostics
-error Handling
-Host https
-Tree shaking-Remove unused code
-Different dev and prod bundles


#FoodZone App
header
 -logo
 -nav items
Body
 -search
 -RestaurantContainer
    -RestaurantCard
      -img
      -name,rating,area,cuisnie
Footer
  -copyright
  -links
  -address
  -contact


types of exports & imports
-default
export default Component;
import Component from "path";

-naming
export const Component;
import {Component} from path;

#React hooks
(Normal js utility functions)
-useState() -(mostly use 80%)
superpower react variabes

-useEffect()