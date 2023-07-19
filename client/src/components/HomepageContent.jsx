import React from "react";
import cookingSvg from "../svgs/cooking.svg";
import Corousel from "../components/Corousel";
import "../css/homepageContent.css";
export const HomepageContent = () => {
  return (
    <>
      <div className="first">
        <div className="svg">
          <img className="cooking" src={cookingSvg} alt="Two people Cooking" />
        </div>
        <div className="content">
          <h1 className="heading">Recipe world</h1>
          <span className="description">
            "Recipe World" is a user-friendly recipe management web application
            designed to elevate cooking experiences. With a seamless user
            authentication system, users can easily sign up, log in, and log
            out, ensuring a personalized experience. The recipe catalog boasts
            an extensive array of delectable dishes, each accompanied by its
            name, ingredients, instructions, and mouthwatering images. The
            powerful recipe search functionality empowers users to explore
            recipes based on various criteria like name, ingredient, or cuisine,
            making meal planning a breeze. Users can curate their culinary
            journey by saving cherished recipes to their personalized cookbook
            and revisiting them at any time. Additionally, a user profile
            feature allows individuals to cherish their recipe collection and
            savor their culinary achievements. Discover, save, and relish a
            world of culinary wonders with "Recipe World."
          </span>
        </div>
      </div>
      <div className="second">
        <div className="content">
          <h1 className="about">About the Application</h1>
          <span className="description">
            "Recipe World" is a modern and feature-rich recipe management web
            application built using the powerful combination of React and
            Bootstrap framework. This delightful platform offers users a
            seamless culinary journey with its user-friendly interface and
            robust functionality. The user authentication feature allows
            individuals to sign up, log in securely, and manage their personal
            accounts. Once logged in, users can explore an extensive recipe
            catalog, comprising an impressive collection of recipes from various
            cuisines. Each recipe is presented with captivating images, detailed
            ingredients, and step-by-step instructions, making cooking a
            delightful experience. With the recipe search feature, users can
            easily find dishes based on specific criteria such as name,
            ingredient, or cuisine, offering convenience and inspiration for
            meal planning. "Recipe World" takes personalization a step further
            by enabling users to save their favorite recipes to their personal
            cookbook.
          </span>
        </div>
        <div>
          <Corousel />
        </div>
      </div>
    </>
  );
};
