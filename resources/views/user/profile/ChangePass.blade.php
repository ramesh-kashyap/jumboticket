<div class="px-[25px] py-[20px] flex-1">
                  <div class="container mx-auto">
                    <div data-v-630ec677="">
                      <div data-v-630ec677="" class="flex justify-center">
                        <ul data-v-630ec677="" class="nav-links">
                          <li data-v-630ec677="">
                            <a
                              data-v-630ec677=""
                              href="{{ route('user.profile') }}"
                              class=""
                              >Edit Profile</a
                            >
                          </li>
                          <li data-v-630ec677="">
                            <a
                              data-v-630ec677=""
                              aria-current="page"
                              href="/profile/reset-password"
                              class="router-link-active router-link-exact-active"
                              >Reset Password</a
                            >
                          </li>
                          <!-- <li data-v-630ec677="">
                            <a
                              data-v-630ec677=""
                              href="/profile/transaction-security"
                              class=""
                              >Transaction Security
                            </a>
                          </li> -->
                          <li data-v-630ec677="">
                            <a
                              data-v-630ec677=""
                              href="{{ route('user.wallets') }}"
                              class=""
                              >Payment Information</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="flex flex-wrap justify-center -mx-3 mt-3">
                      <div class="w-full md:w-1/2 lg:w-6/12 px-3 my-3">
                        <div class="p-7 bg-white rounded-lg h-full">
                          <div class="prof-head"><h4>Change Password</h4></div>
                          <div><button id="sign-up-button"></button></div>
                          <!---->
                          <form action="#" method="POST">
                            <input
                              type="hidden"
                              name="_name_"
                              value="loginpasswordreset"
                            />
                            <div class="mb-2 mt-5">
                              <label
                                for=""
                                class="block mb-2 font-medium text-[#222]"
                                >Old Password*</label
                              >
                              <div class="relative">
                                <input
                                  type="password"
                                  placeholder="Enter Old Password"
                                  class="w-full h-[45px] rounded-lg border border-[#ECC762] bg-gray-100"
                                /><span
                                  class="cursor-pointer absolute top-[50%] right-[5px] translate-y-[-50%] border-none bg-transparent"
                                  type="password"
                                  ><i class="show-eye bi bi-eye"></i
                                  ><i class="hide-eye bi bi-eye-slash"></i
                                ></span>
                              </div>
                              <p
                                class="text-red-600 font-medium block mt-[5px]"
                              ></p>
                            </div>
                            <div class="mb-2 mt-5">
                              <label
                                for=""
                                class="block mb-2 font-medium text-[#222]"
                                >New Password*</label
                              >
                              <div class="relative">
                                <input
                                  type="password"
                                  placeholder="Enter New Password"
                                  class="w-full h-[45px] rounded-lg border border-[#ECC762] bg-gray-100"
                                /><span
                                  class="cursor-pointer absolute top-[50%] right-[5px] translate-y-[-50%] border-none bg-transparent"
                                  type="password"
                                  ><i class="show-eye bi bi-eye"></i
                                  ><i class="hide-eye bi bi-eye-slash"></i
                                ></span>
                              </div>
                              <p
                                class="text-red-600 font-medium block mt-[5px]"
                              ></p>
                            </div>
                            <div class="mb-2 mt-5">
                              <label
                                for=""
                                class="block mb-2 font-medium text-[#222]"
                                >Repeat Password*</label
                              >
                              <div class="relative">
                                <input
                                  type="password"
                                  placeholder="Repeat Password"
                                  class="w-full h-[45px] rounded-lg border border-[#ECC762] bg-gray-100"
                                /><span
                                  class="cursor-pointer absolute top-[50%] right-[5px] translate-y-[-50%] border-none bg-transparent"
                                  type="password"
                                  ><i class="show-eye bi bi-eye"></i
                                  ><i class="hide-eye bi bi-eye-slash"></i
                                ></span>
                              </div>
                              <p
                                class="text-red-600 font-medium block mt-[5px]"
                              ></p>
                            </div>
                            <div class="flex mt-5 justify-left">
                              <button
                                type="submit"
                                class="px-[20px] py-[10px] roundednsa-lg bg-[#ECC762] uppercase font-semibold inline-flex items-center transition-all hover:opacity-90"
                              >
                                Reset Password<i
                                  class="bx bx-chevron-right contents ml-1 text-2xl"
                                ></i>
                              </button>
                            </div>
                          </form>
                          <!---->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>