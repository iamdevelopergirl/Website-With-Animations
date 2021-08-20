import Header from './components/header/header.js';
import './App.css';
import SectionWith2ContainerComponent from './SectionWith2ContainerComponent';
import PlatformComponent from './PlatformComponent';
import ImageTextComponent from './ImageTextComponent';
import DynamicBgComponent from './DynamicBgComponent';
import CaseStudyComponent from './CaseStudyComponent';
import RotatePageComponent from './RotatePageComponent';
import ImageTextStickyComponent from './ImageTextStickyComponent';
import DetailComponent from './DetailComponent';
import TableComponent from './TableComponent';
import OneupFooterComponent from './OneupFooterComponent';
import FooterComponent from './FooterComponent';

const layoutStrings = [
  {
    "layout_01" : {
      "h3" : "A 360 headless technology platform that provides seamless integration for the needs of your e-comm business",
      "h4_0" : "A Flexible Platform for Effective Solutions",
      "p_0" : "KMMRCE has been built to serve all your digital commerce requirements. This begins with seamless customer experiences (b2c or b2b) but does not end there.",
      "seperator" : true,
      "h4_1" : "Design & Layout",
      "p_1" : "Through our intuitive set-up process and modular integration toolkits you can easily connect to all areas of your platform.",
      "ul" : ["CMS", "CRM", "ERP", "Payment gateway", "Store mapping", "Mail servers"]
    }
  },
  {
    "layout_02" : {
      "h3" : "",
      "h4_0" : "A System for all Operators",
      "p_0" : "Our technology has been designed to work across a wide array of business sectors including grocery retail, beauty and cosmetics, consumer electronics, fashion and apparel, wholesale, home furnishing, EdTech, FinTech and FitTech.",
      "seperator" : true,
      "h4_1" : "Make the Most of our Modules",
      "p_1" : "KMMRCE has built its platform to provide enterprise operators with a modular solution that can be easily and affordably scaled where necessary.",
      "ul" : ["Advanced CMS for ease of use", "Greater single system modules"]
    }
  },
  {
    "layout_03" : {
      "h3" : "",
      "h4_0": "Modular Components Key to our Solution",
      "p_0" : "We offer more than 50 unique modular components to help customise your commerce platform and provide you with the necessary tools to run your business as an end to end solution.",
      "ul" : ["Multi-channel headless CMS", "Global payment gateway integration toolkits", "Logistics planning and management",
              "Picking and packing operations", "Product photography", "Advertising and marketing dashboard", "Loyalty scheme engine"],
      "seperator" : true,
      "h4_1": "A Collective Approach that Brings You More",
      "p_1" : "We are working with a number of existing partners to expand our core technology while developing further components to better serve individual business sector requirements."
      
    }
  },
  {
    "layout_04" : {
      "h3" : "",
      "h4_0" : "A More Complete Solution",
      "p_0" : "KMMRCE provides a number of benefits designed to reduce your set-up and integration time and maximise your returns through digital commerce.",
      "seperator" : true,
      "h4_1" : "Business Solutions",
      "p_1" : "KMMRCE has been built on a growth-driving tech stack that provides accessible solutions from sign-up without the need for complex integration processes.",
      "ul" : ["Less trial and error for API integrations", "Greater single system modules"]
    }
  },
  {
    "layout_05" : {
      "h3" : "KMMRCE gives you complete freedom with total support for your e-comm needs",
      "h4_0" : "Decouple Your Development",
      "p_0" : "As an entirely agnostic headless CMS, we ensure you are supported when choosing to work with the front end tech you choose and without the need for device refactoring.",
      "seperator" : true,
      "h4_1" : "Product Flexibility",
      "p_1" : "KMMRCE allows you to configure your stock types and variables in the simplest way.",
      "ul" : ["Product visibility", "Personalised shopping capabilities", "Multi-tiered stock monitoring", "Data import and export tools"]
    }
  },
  {
    "layout_06" : {
      "h3" : "",
      "h4_0" : "Lifecycle Fulfillment Processes",
      "p_0" : "Using the KMMRCE fulfillment modules, you will gain access to our picking and packing tools as well as logistics components that give you complete control or that allow third party integration.",
      "seperator" : true,
      "h4_1" : "Intelligent Inventory Management",
      "p_1" : "KMMRCE allows returns to be managed through automated processing standard at customer and fulfillment level.",
      "ul" : ["Essential efficiency driver", "Integration tools for picking devices"]
    }
  },
  {
    "layout_07" : {
      "h3" : "",
      "h4_0" : "Asset Production Management",
      "p_0" : "Our photography module provides your production team or agency with the tools and storage required to manage high volume product processing.",
      "seperator" : true,
      "h4_1" : "Multi Format Support",
      "p_1" : "KMMRCE makes it easy to accept image and video file types with the necessary compression tools available from within the platform.",
      "ul" : ["Multi-tiered user profiles", "Automated notifications and centralised storage",
              "Infinite photographers, production, and product managers", "Direct synchronisation to e-comm and ERP",
              "Action data warehousing"]
    }
  },
  {
    "layout_08" : {
      "h3" : "",
      "h4_0" : "Centrally Managed",
      "p_0" : "Build, manage and analyse your site's commercial network from within KMMRCE. We offer an in-depth view of your commercial reach through our dashboard.",
      "seperator" : true,
      "h4_1" : "SEO & Marketing",
      "p_1" : "Advance your site's global reach with our easy to use accountable SEO and SEM tools.",
      "ul" : ["Achieve greater cut through online", "Accountable spend on response mechanisms"]
    }
  },
]
function App() {
  return (
    <div>
    <Header/>
    <SectionWith2ContainerComponent/>
    <PlatformComponent/>
    <ImageTextComponent order="" layout="layout_01" strings={layoutStrings[0]["layout_01"]}/>
    <ImageTextComponent order="" layout="layout_02" strings={layoutStrings[1]["layout_02"]}/>
    <ImageTextComponent order="" layout="layout_03" strings={layoutStrings[2]["layout_03"]}/>
    <ImageTextComponent order="" layout="layout_04" strings={layoutStrings[3]["layout_04"]}/>
    <DynamicBgComponent/>
    <CaseStudyComponent/>
    <RotatePageComponent/>
    <ImageTextStickyComponent/>
    <DetailComponent/>
    <ImageTextComponent order="change_order" layout="layout_05" strings={layoutStrings[4]["layout_05"]}/>
    <ImageTextComponent order="change_order" layout="layout_06" strings={layoutStrings[5]["layout_06"]}/>
    <ImageTextComponent order="change_order" layout="layout_07" strings={layoutStrings[6]["layout_07"]}/>
    <ImageTextComponent order="change_order" layout="layout_08" strings={layoutStrings[7]["layout_08"]}/>
    <TableComponent/>
    <OneupFooterComponent/>
    <FooterComponent/>
  </div>
  );
}

export default App;
