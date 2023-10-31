import Title from "../Componets/Title";

const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const data = {
            productName: form.name.value,
            area: form.area.value,
            color:form.color.value,
            image:form.image.value,
            ytLink:form.ytLink.value,
            tags:form.tags.value,
            description:form.textArea.value,
        }
        console.log(data);
    }
    return (
        <div>
            <Title>Add Product</Title>
      <form onSubmit={handleAddProduct}>
        <div className="flex gap-4 ">
        <div className="w-1/2">
        <div className="form-control ">
          <label className="label">
            <span className="label-text"> Product Name</span>
          </label>
          <input type="text" placeholder="Product Name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Area</span>
          </label>
          <input type="text" name="area" placeholder="Your Location" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Select a Color</span>
          </label>
          <input type="color" name="color" placeholder="Your Location" className="input input-bordered w-full" required />
        </div>
        </div>
        <div className="w-1/2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter a product image</span>
          </label>
          <input name="image" type="text" placeholder="Product image" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">YouTube Link</span>
          </label>
          <input placeholder="Youtube Link" name="ytLink" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Tags</span>
          </label>
          <input type="text" name="tags"  placeholder="Enter Some Tags" className="input input-bordered" required />
        </div>
        </div>
        </div>
        <textarea className="border-2 mt-4 w-full h-24 rounded-2xl" name="textArea" id="" cols="" rows=""> </textarea>
        <input type="submit" className=" py-2 px-4 w-full rounded text-white font-semibold text-md bg-[#FF3811] my-3" value="Submit" />
      </form>
    </div>
    );
};

export default AddProduct;