"use client";

import IOrderItem from "@/lib/interfaces/OrderItem";
import { getTaxRate } from "@/lib/api/taxRates";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const TAX_RATE = await getTaxRate(); // TODO: Replace with actual tax rate
export default function CheckoutPage() {
  const cartStateStorage = localStorage.getItem("cart-storage");
  const cartStorage = cartStateStorage ? JSON.parse(cartStateStorage) : null;
  const cart = cartStorage?.state.cart || [];
  const total = cartStorage?.state.total || 0;
  const [termsAccepted, setTermsAccepted] = useState(false);

  console.log("storage items: ", cart, total);

  const router = useRouter();
  //   const total = cart?.reduce(ß
  //       prevVal + currentVal.price * (currentVal.quantity ?? 0),
  //     0
  //   );
  //   const [phoneNumber, setPhoneNumber] = useState("");
  //   const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  //   const [isValid, setIsValid] = useState(false);

  const address = "123 Main St, Springfield, USA"; // TODO: Replace with actual address
  const restaurantAddress = "456 Elm St, Springfield, USA"; // TODO: Replace with actual restaurant address

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     if (isValid) {
  //       console.log("Form submitted");
  //     } else {
  //       console.log("Form not submitted");
  //     }
  //     //TODO: Add logic for the form submit
  //   };

  //   const isValidPhoneNumber = (phoneNum: string) => {
  //     const regex = /^\(?([0-9]{3})\)?[-.● ]?([0-9]{3})[-.● ]?([0-9]{4})$/;
  //     return regex.test(phoneNum);
  //   };

  //   const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const { value } = e.target;
  //     setPhoneNumber(value);
  //     if (!isValidPhoneNumber(value)) {
  //       setIsPhoneNumberValid(false);
  //     } else {
  //       setIsPhoneNumberValid(true);
  //     }
  //   };

  //   useEffect(() => {
  //     if (isPhoneNumberValid) {
  //       setIsValid(true);
  //     } else {
  //       setIsValid(false);
  //     }
  //   }, [isPhoneNumberValid]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-4xl lg:px-8">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
        Delivery details
      </h1>
      <div className="mt-6 space-y-4 border-b border-t border-gray-200 py-8 dark:border-gray-700 sm:mt-8">
        <h2 className="text-sm font-semibold">Delivering to:</h2>
        <div>
          <p className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400 inline-block">
            {address}
          </p>
          <Link
            className="text-base font-medium text-blue-600 hover:underline dark:text-primary-500 ml-5"
            href="#"
          >
            Edit address
          </Link>
        </div>
        <div>
          <p className="inline-block bg-gray-100 p-1 rounded-md text-xs font-semibold text-gray-700 hover:underline cursor-pointer">
            Restaurant: <span className="font-normal">{restaurantAddress}</span>
          </p>{" "}
          <Link
            className="text-base font-medium text-blue-600 hover:underline dark:text-primary-500 ml-5"
            href="#"
          >
            Edit restaurant
          </Link>
        </div>
        {/* <label className="block mt-5 font-semibold">
          Unit (Optional)
          <input
            className="bg-gray-100 p-1 rounded-md block mt-[2px] w-full outline-2 outline-black focus:outline-blue-500 focus:outline-1"
            type="text"
          />
        </label> */}
      </div>
      {/* TODO: add functionality to link */}
      {!cart && (
        <>
          <p className="mt-4 text-lg">Your cart is empty.</p>
          <p className="mt-2 text-sm text-gray-500">
            Please add items to your cart before proceeding to checkout.
          </p>
        </>
      )}
      {cart && (
        <div className="mt-4 bg-blue-50 text-black p-10 rounded-lg">
          <form>
            <h2 className="text-2xl font-bold text-gray-900 mt-3">Your Cart</h2>

            <label className="block mt-5 font-semibold">
              Order Notes & Delivery Instructions (Optional)
              <textarea
                placeholder="Please leave a note for the restaurant or delivery driver."
                rows={4}
                maxLength={200}
                spellCheck="true"
                className="bg-gray-100 p-1 rounded-md block mt-[2px] w-full outline-2 font-medium outline-black focus:outline-blue-500 focus:outline-1"
              />
            </label>
            {/* <label className="block mt-5 font-semibold">
              Phone Number (Required)*
              <input
                className={`bg-gray-100 p-1 rounded-md block mt-[2px] w-full outline-2 outline-black focus:outline-blue-500 focus:outline-1 ${
                  isPhoneNumberValid
                    ? "focus:border-green-500"
                    : "focus:border-red-500 focus:text-red-500"
                }`}
                value={phoneNumber}
                type="tel"
                onChange={handlePhoneNumberChange}
                placeholder="Enter your phone number"
                required
              />
            </label> */}
            <div className="mt-6 sm:mt-8">
              <div className="relative overflow-x-auto border-b border-gray-200 dark:border-gray-800">
                <table className="w-full text-left font-medium text-gray-900 dark:text-white md:table-fixed">
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    {cart.map((item: IOrderItem) => (
                      <tr key={item.id}>
                        <td className="whitespace-nowrap py-4 md:w-[384px]">
                          <div className="flex items-center gap-4">
                            <a
                              href="#"
                              className="flex items-center aspect-square w-10 h-10 shrink-0"
                            >
                              <img
                                className="h-auto w-full max-h-full dark:hidden"
                                src={item.imageurl}
                                alt="imac image"
                              />
                              <img
                                className="hidden h-auto w-full max-h-full dark:block"
                                src={item.imageurl}
                                alt="imac image"
                              />
                            </a>
                            <a href="#" className="hover:underline">
                              {item.name}
                            </a>
                          </div>
                        </td>

                        <td className="p-4 text-base font-normal text-gray-900 dark:text-white">
                          x{item.quantity}
                        </td>

                        <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                          ${item.price.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 space-y-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Order summary
                </h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500 dark:text-gray-400">
                        Original price
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        ${total?.toFixed(2)}
                      </dd>
                    </dl>

                    {/* <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500 dark:text-gray-400">
                        Savings
                      </dt>
                      <dd className="text-base font-medium text-green-500">
                        -$299.00
                      </dd>
                    </dl> */}

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500 dark:text-gray-400">
                        Delivery Fee
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        $99.99
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500 dark:text-gray-400">Tax</dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        ${(TAX_RATE ?? 0 * total).toFixed(2)}
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-lg font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="text-lg font-bold text-gray-900 dark:text-white">
                      ${(total + (TAX_RATE ?? 0 * total) + 99.99).toFixed(2)}
                    </dd>
                  </dl>

                  {/* START OF COPY */}
                  <section className="py-8 antialiased dark:bg-gray-900 md:py-12">
                    <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                      <div className="mx-auto max-w-5xl">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                          Payment
                        </h2>

                        <div className="sm:mt-8 lg:flex lg:items-start lg:gap-12">
                          <form
                            action="#"
                            className="w-full m-auto rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-2xl lg:p-8"
                          >
                            <div className="mb-6 grid grid-cols-2 gap-4">
                              <div className="col-span-2 sm:col-span-1">
                                <label
                                  htmlFor="full_name"
                                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  {" "}
                                  Full name (as displayed on card)*{" "}
                                </label>
                                <input
                                  type="text"
                                  id="full_name"
                                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                  placeholder="Bonnie Green"
                                  required
                                />
                              </div>

                              <div className="col-span-2 sm:col-span-1">
                                <label
                                  htmlFor="card-number-input"
                                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  {" "}
                                  Card number*{" "}
                                </label>
                                <input
                                  type="text"
                                  id="card-number-input"
                                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                  placeholder="xxxx-xxxx-xxxx-xxxx"
                                  pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                                  required
                                />
                              </div>

                              <div>
                                <label
                                  htmlFor="card-expiration-input"
                                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Card expiration*{" "}
                                </label>
                                <div className="relative">
                                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-1">
                                    <svg
                                      className="h-4 w-4 text-gray-500 dark:text-gray-400"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                  <input
                                    type="number"
                                    name="expMonth"
                                    min="1"
                                    max="12"
                                    placeholder="MM"
                                    required
                                    className="inline-block w-14 rounded-lg border border-gray-300 bg-gray-50 p-2 ps-2  ml-6 mr-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                  />
                                  /
                                  <input
                                    type="number"
                                    name="expYear"
                                    min="2024"
                                    placeholder="YYYY"
                                    className="inline-block w-19 rounded-lg border border-gray-300 bg-gray-50 p-2 ps-2 ml-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                  />
                                </div>
                              </div>
                              <div>
                                <label
                                  htmlFor="cvv-input"
                                  className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  CVV*
                                  <button
                                    data-tooltip-target="cvv-desc"
                                    data-tooltip-trigger="hover"
                                    className="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                                  >
                                    <svg
                                      className="h-4 w-4"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                  </button>
                                  <div
                                    id="cvv-desc"
                                    role="tooltip"
                                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                                  >
                                    The last 3 digits on back of card
                                    <div
                                      className="tooltip-arrow"
                                      data-popper-arrow
                                    ></div>
                                  </div>
                                </label>
                                <input
                                  type="number"
                                  id="cvv-input"
                                  aria-describedby="helper-text-explanation"
                                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                  placeholder="•••"
                                  required
                                />
                              </div>
                            </div>
                            <div className="flex mb-2 items-start sm:items-center">
                              <input
                                id="terms-checkbox-2"
                                type="checkbox"
                                value=""
                                onChange={(e) => {
                                  setTermsAccepted(e.currentTarget.checked);
                                }}
                                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                              />
                              <label
                                htmlFor="terms-checkbox-2"
                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                {" "}
                                I agree with the{" "}
                                <a
                                  href="#"
                                  title=""
                                  className="text-blue-700 underline hover:no-underline dark:text-primary-500"
                                >
                                  Terms and Conditions
                                </a>{" "}
                                of use of the Krusty Krab{" "}
                              </label>
                            </div>{" "}
                            <div className="flex gap-4">
                              <button
                                type="button"
                                onClick={() => {
                                  router.push("/");
                                }}
                                className="cursor-pointer w-full rounded-lg  border border-gray-200 bg-white px-5  py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                              >
                                Return to Shopping
                              </button>

                              <button
                                type="submit"
                                className={`${
                                  termsAccepted
                                    ? "bg-blue-700 hover:bg-blue-800 text-white cursor-pointer"
                                    : "bg-gray-100 text-black"
                                } mt-4 flex w-full items-center justify-center rounded-lg  px-5 py-2.5 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-primary-300  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0`}
                              >
                                Pay now
                              </button>
                            </div>
                          </form>

                          {/* <div className="mt-6 grow sm:mt-8 lg:mt-0">
                            <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                              <div className="space-y-2">
                                <dl className="flex items-center justify-between gap-4">
                                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                                    Original price
                                  </dt>
                                  <dd className="text-base font-medium text-gray-900 dark:text-white">
                                    $6,592.00
                                  </dd>
                                </dl>

                                <dl className="flex items-center justify-between gap-4">
                                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                                    Savings
                                  </dt>
                                  <dd className="text-base font-medium text-green-500">
                                    -$299.00
                                  </dd>
                                </dl>

                                <dl className="flex items-center justify-between gap-4">
                                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                                    Store Pickup
                                  </dt>
                                  <dd className="text-base font-medium text-gray-900 dark:text-white">
                                    $99
                                  </dd>
                                </dl>

                                <dl className="flex items-center justify-between gap-4">
                                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                                    Tax
                                  </dt>
                                  <dd className="text-base font-medium text-gray-900 dark:text-white">
                                    $799
                                  </dd>
                                </dl>
                              </div>

                              <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                <dt className="text-base font-bold text-gray-900 dark:text-white">
                                  Total
                                </dt>
                                <dd className="text-base font-bold text-gray-900 dark:text-white">
                                  $7,191.00
                                </dd>
                              </dl>
                            </div>

                            <div className="mt-6 flex items-center justify-center gap-8">
                              <img
                                className="h-8 w-auto dark:hidden"
                                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg"
                                alt=""
                              />
                              <img
                                className="hidden h-8 w-auto dark:flex"
                                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-dark.svg"
                                alt=""
                              />
                              <img
                                className="h-8 w-auto dark:hidden"
                                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
                                alt=""
                              />
                              <img
                                className="hidden h-8 w-auto dark:flex"
                                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg"
                                alt=""
                              />
                              <img
                                className="h-8 w-auto dark:hidden"
                                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg"
                                alt=""
                              />
                              <img
                                className="hidden h-8 w-auto dark:flex"
                                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-dark.svg"
                                alt=""
                              />
                            </div>
                          </div> */}
                        </div>

                        <p className="mt-6 text-center text-gray-500 dark:text-gray-400 sm:mt-8 lg:text-left">
                          Payment processed by{" "}
                          <a
                            href="#"
                            title=""
                            className="font-medium text-blue-700 underline hover:no-underline dark:text-blue-500"
                          >
                            Paddle
                          </a>{" "}
                          for{" "}
                          <a
                            href="#"
                            title=""
                            className="font-medium text-blue-700 underline hover:no-underline dark:text-blue-500"
                          >
                            Flowbite LLC
                          </a>
                          - United States Of America
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js"></script> */}
                  {/* END OF COPY */}
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
