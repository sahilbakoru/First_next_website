import { Quicksand ,DM_Serif_Display} from "next/font/google";
const inter = Quicksand({ weight: "400", subsets: ["latin"] });
const outer = DM_Serif_Display({weight: "400", subsets: ["latin"]})
import Image from "next/image";
import NavBar from "../components/NavBar";
export default function Projects() {
  let PosImages = [{ img: "Frame1.png" }];

  return (
    <main
      style={{  marginBottom: "10%" }}
      className={inter.className}
    >
      <NavBar />

      <div style={{marginLeft:'10%',marginRight:'10%'}}>
      <div
        style={{
          textAlign: "center",
          paddingTop: "5%",
          paddingBottom: "15%",
        }}
      >
        <div style={{ fontSize: "400%" }}
      className={outer.className}
        
        >Projects</div>
      </div>

      {/* <div
        style={{
          border: "0.5px solid grey",
        }}
      /> */}

      <div style={{ fontSize: "200%", marginTop: "3%" }}>Verve POS</div>

      <div style={{ marginTop: "2%" }}>
        {PosImages.map((e) => {
          return (
            <div style={{ textAlign: "center" }}>
              <Image
                style={{ margin: "1%" }}
                width={1000}
                height={700}
                src={"/" + e.img}
                alt="img"
              />
            </div>
          );
        })}
      </div>

      <div>
        <div style={{ fontSize: "200%", color: "#0097e8" }}>
          Verve POS is an App that allows retail stores and businesses to manage
          inventory, track sales data, generate reports, print lables, add
          products by simply scanning them .
        </div>
        <div style={{ fontSize: "150%", marginTop: "5%" }}>
          Inventory Management:
        </div>
        <div style={{ fontSize: "120%", marginTop: "1%", color: "#666666" }}>
          Verve POS App help businesses track and manage their product inventory
          in real-time. Users can monitor stock levels, receive notifications
          for low stock items, and update product information.
        </div>
        <div style={{ textAlign: "center", margin: "2%" }}>
          <Image
            style={{ margin: "1%" }}
            width={1000}
            height={700}
            src={"/Frame6.png"}
            alt="img"
          />
        </div>

        <div style={{ fontSize: "150%", marginTop: "5%" }}>
          Product Catalog:
        </div>
        <div style={{ fontSize: "120%", marginTop: "1%", color: "#666666" }}>
          Verve POS App includes a digital product catalog that displays item
          descriptions, prices, and images. It simplifies the process of adding
          products to transactions.
        </div>

        <div style={{ textAlign: "center", margin: "2%" }}>
          <Image
            style={{ margin: "1%" }}
            width={1000}
                height={700}
            src={"/Frame3.png"}
            alt="img"
          />
        </div>

        <div style={{ fontSize: "150%", marginTop: "5%" }}>
          Reporting and Analytics:
        </div>
        <div style={{ fontSize: "120%", marginTop: "1%", color: "#666666" }}>
          Users can access detailed reports and analytics on sales, inventory,
          and customer data. This information is valuable for making informed
          business decisions.
        </div>

        <div style={{ textAlign: "center", margin: "2%" }}>
          <Image
            style={{ margin: "1%" }}
            width={1000}
                height={700}
            src={"/Frame4.png"}
            alt="img"
          />
        </div>

        <div style={{ fontSize: "150%", marginTop: "5%" }}>
          Add New Products:
        </div>
        <div style={{ fontSize: "120%", marginTop: "1%", color: "#666666" }}>
          Users can easily add new products to their inventory by entering
          essential details, such as product name, description, price, and
          barcode. Verve POS apps offer barcode scanning functionality, enabling
          users to quickly add products to the inventory by scanning their
          barcodes.
        </div>

        <div style={{ textAlign: "center", margin: "2%" }}>
          <Image
            style={{ margin: "1%" }}
            width={1000}
                height={700}
            src={"/Frame2.png"}
            alt="img"
          />
        </div>

        <div style={{ fontSize: "150%", marginTop: "5%" }}>Label Printing:</div>
        <div style={{ fontSize: "120%", marginTop: "1%", color: "#666666" }}>
          Verve POS label printing capabilities allows businesses to print
          labels for products, pricing, and barcodes directly from the app. This
          feature is especially useful for retail stores and businesses that
          need to label items for inventory tracking, pricing, and
          identification purposes.
        </div>

        <div style={{ fontSize: "150%", marginTop: "5%" }}>
          Barcode Generation:
        </div>
        <div style={{ fontSize: "120%", marginTop: "1%", color: "#666666" }}>
          Verve POS can generate and print barcode labels for products, making
          it easier to scan items during checkout and inventory management.
        </div>

        <div style={{ textAlign: "center", margin: "2%" }}>
          <Image
            style={{ margin: "1%" }}
            width={1000}
            height={700}
            src={"/Frame5.png"}
            alt="img"
          />
        </div>

 

        <div style={{ fontSize: "150%", marginTop: "5%" }}>
          Overall, Verve POS app streamlines the sales process, improves
          inventory management, and provides valuable insights into business
          operations, making it an essential tool for retail and
          service-oriented businesses.
        </div>
      </div>
      <div
        style={{
          border: "0.5px solid grey",
          marginTop: "10%",
        }}
      />
      </div>
    </main>
  );
}
