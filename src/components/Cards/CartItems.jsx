"use client";
import { deleteItemsFormCart } from "@/actions/server/cart";
import Image from "next/image";
import { HiOutlineMinus, HiOutlinePlus, HiOutlineTrash } from "react-icons/hi";
import Swal from "sweetalert2";

const CartItems = ({ cartItem, removeItem }) => {
  const { image, title, username, price, quantity, _id } = cartItem;
  const handleCartDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (sweetResult) => {
      if (sweetResult.isConfirmed) {
        //my one code
        const deleteRes = await deleteItemsFormCart(id);
        if (deleteRes.success) {
          removeItem(_id);
          Swal.fire({
            title: "Deleted!",
            text: "Your item has been deleted.",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Opps!",
            text: "Something went wrong",
            icon: "error",
          });
        }
        //
      }
    });
  };

  return (
    // Changed min-h-screen to py-10 to avoid huge bottom gap
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="card card-side bg-base-100 shadow-sm border border-base-200 flex flex-col sm:flex-row items-center overflow-hidden">
            {/* Reduced image size and constrained height on mobile */}
            <figure className="w-full sm:w-40 h-48 sm:h-32 flex-shrink-0">
              <Image
                width={200}
                height={200}
                src={image}
                alt={cartItem}
                className="object-cover w-full h-full"
              />
            </figure>

            {/* Reduced padding in card-body */}
            <div className="card-body p-4 w-full gap-1">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="card-title text-base sm:text-lg leading-tight">{title}</h2>
                  <p className="text-xs text-gray-500">Seller: {username}</p>
                </div>
                {/* delete button */}
                <button
                  onClick={() => handleCartDelete(_id)}
                  className="btn btn-ghost btn-sm btn-circle text-error hover:bg-error/10"
                >
                  <HiOutlineTrash size={20} />
                </button>
              </div>

              <div className="flex justify-between items-center mt-2">
                <span className="text-lg font-bold text-primary">${price}</span>

                <div className="flex items-center gap-3 bg-base-200 rounded-lg px-2 py-1">
                  <button className="btn btn-ghost btn-xs hover:bg-transparent">
                    <HiOutlineMinus size={16} />
                  </button>
                  <span className="font-semibold w-4 text-center">{quantity}</span>
                  <button className="btn btn-ghost btn-xs hover:bg-transparent text-primary">
                    <HiOutlinePlus size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="lg:col-span-1">
          <div className="card bg-base-100 shadow-sm border border-base-200">
            <div className="card-body p-6">
              <h2 className="card-title text-lg mb-2">Order Summary</h2>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${price * quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-success font-medium">Free</span>
                </div>
                <div className="divider my-1"></div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">${price * quantity}</span>
                </div>
              </div>
              <div className="card-actions mt-4">
                <button className="btn btn-primary btn-block min-h-0 h-12">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
