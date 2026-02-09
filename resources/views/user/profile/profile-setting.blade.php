<div class="px-[25px] py-[20px] flex-1">
                  <div>
                    <div class="container mx-auto">
                      <div data-v-630ec677="">
                        <div data-v-630ec677="" class="flex justify-center">
                          <ul data-v-630ec677="" class="nav-links">
                            <li data-v-630ec677="">
                              <a data-v-630ec677="" aria-current="page" href="{{ route('user.profile') }}" class="router-link-active router-link-exact-active">Edit Profile</a>
                            </li>
                            <li data-v-630ec677="">
                              <a data-v-630ec677="" href="{{ route('user.ChangePass') }}" class="">Reset Password</a>
                            </li>
                            <!-- <li data-v-630ec677="">
                              <a data-v-630ec677="" href="/profile/transaction-security" class="">Transaction Security
                              </a>
                            </li> -->
                            <li data-v-630ec677="">
                              <a data-v-630ec677="" href="{{ route('user.wallets') }}" class="">Payment Information</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div><button id="sign-up-button"></button></div>
                      <!---->
                      <div class="flex justify-center flex-wrap -mx-3 mt-3">
                        <div class="w-full md:w-1/2 lg:w-6/12 px-3 my-3">
                          <div class="p-7 bg-white rounded-lg">
                            <div class="prof-head"><h4>My details</h4></div>
                            <div>
                              <div class="block lg:flex items-center mt-5">
                                <div class="flex justify-center mr-5 relative">
                                  <div class="w-24 h-24 bg-slate-50 rounded-full relative flex justify-center items-center">
                                    <div class="image-container">
                                      <img src="{{asset('')}}assets/images/avatar.png" class="image">
                                    </div>
                                  </div>
                                  <li class="p-0 m-0 list-none contents">
                                    <button class="bg-[#222222] absolute left-[50%] translate-x-[-50%] bottom-[-20px] w-8 h-8 flex justify-center items-center rounded-full text-[16px] border-[2px] border-white text-[#ecc762]">
                                      <i class="bi bi-cloud-arrow-up-fill"></i></button><!---->
                                  </li>
                                  <!---->
                                </div>
                                <div class="w-full lg:w-[calc(100%-116px)] mt-5 lg:mt-0">
                                  <p class="text-base font-semibold text-center lg:text-left"></p>
                                  <span class="text-[13px] flex items-center lg:justify-start sm:justify-start xl:justify-start"><i class="bx bxs-map contents text-[#BF953F]"></i>
                                    {{ Auth::user()->country }}</span>
                                </div>
                              </div>
                            </div>
                            <div class="overflow-x-auto mt-10">
                              <div class="mabil-res">
                                <table class="w-full text-sm text-left text-gray-500">
                                  <tbody>
                                    <tr class="bg-gray-100">
                                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-right">
                                        Member ID
                                      </th>
                                      <td class="px-6 py-4 text-left">
                                        <span class="text-[#111] font-semibold">{{ Auth::user()->username }}</span>
                                      </td>
                                    </tr>
                                    <tr class="bg-white">
                                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-right">
                                        Joining Date
                                      </th>
                                      <td class="px-6 py-4 text-left">
                                        <span class="text-[#111] font-semibold">{{ Auth::user()->jdate}}</span>
                                      </td>
                                    </tr>


                              



                                    <tr class="bg-gray-100">
                                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-right">
                                         Name
                                      </th>
                                      <td class="px-6 py-4 text-left">
                                        <span class="text-[#111] font-semibold">{{ Auth::user()->name }}</span>
                                      </td>
                                    </tr>
                                    <tr class="bg-white">
                                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-right">
                                         Email
                                      </th>
                                      <td class="px-6 py-4 text-left">
                                        <span class="text-[#111] font-semibold">{{ Auth::user()->email }}</span>
                                      </td>
                                    </tr>
                                    <tr class="bg-gray-100">
                                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-right">
                                         Mobile No.
                                      </th>
                                      <td class="px-6 py-4 text-left">
                                        <span class="text-[#111] font-semibold">
                                          {{ Auth::user()->phone }}</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>



                        <div class="w-full md:w-1/2 lg:w-6/12 px-3 my-3">
                          <div class="p-7 bg-white rounded-lg h-full">
                            <div class="prof-head"><h4>Edit Profile</h4></div>
                            <form action="{{ route('user.update-profile') }}" method="POST">
                              @csrf
                              <div class="mb-2 mt-5">
                                <label for="" class="block mb-2 font-medium text-[#222]">Full Name*</label>
                                
                                
                                <input type="text" placeholder="Enter Fullname"   name="name" value="{{ $profile_data ? $profile_data->name : '' }}" class="w-full h-[45px] rounded-lg border border-[#ECC762] bg-gray-100">
                              </div>
                              <p class="text-red-600 font-medium block mt-[5px]"></p>
                              <div class="mb-2 mt-5">
                                <label for="" class="block mb-2 font-medium text-[#222]">Country*</label>
                                
                                
                                <select name="country" id=""   class="w-full h-[45px] rounded-lg border border-[#ECC762] bg-gray-100">

                            <option>
                                {{ $profile_data ? $profile_data->country : '' }}
                            </option>
                            <option value="AFGHANISTAN">
                                AFGHANISTAN</option>
                            <option value="ALBANIA">ALBANIA
                            </option>
                            <option value="ALGERIA">ALGERIA
                            </option>
                            <option value="AMERICAN SAMOA">
                                AMERICAN SAMOA</option>
                            <option value="ANDORRA">ANDORRA
                            </option>
                            <option value="ANGOLA">ANGOLA
                            </option>
                            <option value="ANGUILLA">ANGUILLA
                            </option>
                            <option value="ANTARCTICA">
                                ANTARCTICA</option>
                            <option value="ANTIGUA AND BARBUDA">
                                ANTIGUA AND BARBUDA</option>
                            <option value="ARGENTINA">
                                ARGENTINA</option>
                            <option value="ARMENIA">ARMENIA
                            </option>
                            <option value="ARUBA">ARUBA
                            </option>
                            <option value="AUSTRALIA">
                                AUSTRALIA</option>
                            <option value="AUSTRIA">AUSTRIA
                            </option>
                            <option value="AZERBAIJAN">
                                AZERBAIJAN</option>
                            <option value="BAHAMAS">BAHAMAS
                            </option>
                            <option value="BAHRAIN">BAHRAIN
                            </option>
                            <option value="BANGLADESH">
                                BANGLADESH</option>
                            <option value="BARBADOS">
                                BARBADOS</option>
                            <option value="BELARUS">BELARUS
                            </option>
                            <option value="BELGIUM">BELGIUM
                            </option>
                            <option value="BELIZE">BELIZE
                            </option>
                            <option value="BENIN">BENIN
                            </option>
                            <option value="BERMUDA">BERMUDA
                            </option>
                            <option value="BHUTAN">BHUTAN
                            </option>
                            <option value="BOLIVIA">BOLIVIA
                            </option>
                            <option value="BOSNIA AND HERZEGOVINA">
                                BOSNIA AND HERZEGOVINA
                            </option>
                            <option value="BOTSWANA">
                                BOTSWANA</option>
                            <option value="BOUVET ISLAND">
                                BOUVET ISLAND</option>
                            <option value="BRAZIL">BRAZIL
                            </option>
                            <option value="BRITISH INDIAN OCEAN TERRITORY">
                                BRITISH INDIAN OCEAN
                                TERRITORY</option>
                            <option value="BRUNEI DARUSSALAM">
                                BRUNEI DARUSSALAM</option>
                            <option value="BULGARIA">
                                BULGARIA</option>
                            <option value="BURKINA FASO">
                                BURKINA FASO</option>
                            <option value="BURUNDI">BURUNDI
                            </option>
                            <option value="CAMBODIA">
                                CAMBODIA</option>
                            <option value="CAMEROON">
                                CAMEROON</option>
                            <option value="CANADA">CANADA
                            </option>
                            <option value="CAPE VERDE">CAPE
                                VERDE</option>
                            <option value="CAYMAN ISLANDS">
                                CAYMAN ISLANDS</option>
                            <option value="CENTRAL AFRICAN REPUBLIC">
                                CENTRAL AFRICAN REPUBLIC
                            </option>
                            <option value="CHAD">CHAD
                            </option>
                            <option value="CHILE">CHILE
                            </option>
                            <option value="CHINA">CHINA
                            </option>
                            <option value="CHRISTMAS ISLAND">
                                CHRISTMAS ISLAND</option>
                            <option value="COCOS (KEELING) ISLANDS">
                                COCOS (KEELING) ISLANDS
                            </option>
                            <option value="COLOMBIA">
                                COLOMBIA</option>
                            <option value="COMOROS">COMOROS
                            </option>
                            <option value="CONGO">CONGO
                            </option>
                            <option value="CONGO, THE DEMOCRATIC REPUBLIC OF THE">
                                CONGO, THE DEMOCRATIC
                                REPUBLIC OF THE</option>
                            <option value="COOK ISLANDS">
                                COOK ISLANDS</option>
                            <option value="COSTA RICA">COSTA
                                RICA</option>
                            <option value="COTE D'IVOIRE">
                                COTE D'IVOIRE</option>
                            <option value="CROATIA">CROATIA
                            </option>
                            <option value="CUBA">CUBA
                            </option>
                            <option value="CYPRUS">CYPRUS
                            </option>
                            <option value="CZECH REPUBLIC">
                                CZECH REPUBLIC</option>
                            <option value="DENMARK">DENMARK
                            </option>
                            <option value="DJIBOUTI">
                                DJIBOUTI</option>
                            <option value="DOMINICA">
                                DOMINICA</option>
                            <option value="DOMINICAN REPUBLIC">
                                DOMINICAN REPUBLIC</option>
                            <option value="ECUADOR">ECUADOR
                            </option>
                            <option value="EGYPT">EGYPT
                            </option>
                            <option value="EL SALVADOR">EL
                                SALVADOR</option>
                            <option value="EQUATORIAL GUINEA">
                                EQUATORIAL GUINEA</option>
                            <option value="ERITREA">ERITREA
                            </option>
                            <option value="ESTONIA">ESTONIA
                            </option>
                            <option value="ETHIOPIA">
                                ETHIOPIA</option>
                            <option value="FALKLAND ISLANDS (MALVINAS)">
                                FALKLAND ISLANDS (MALVINAS)
                            </option>
                            <option value="FAROE ISLANDS">
                                FAROE ISLANDS</option>
                            <option value="FIJI">FIJI
                            </option>
                            <option value="FINLAND">FINLAND
                            </option>
                            <option value="FRANCE">FRANCE
                            </option>
                            <option value="FRENCH GUIANA">
                                FRENCH GUIANA</option>
                            <option value="FRENCH POLYNESIA">
                                FRENCH POLYNESIA</option>
                            <option value="FRENCH SOUTHERN TERRITORIES">
                                FRENCH SOUTHERN TERRITORIES
                            </option>
                            <option value="GABON">GABON
                            </option>
                            <option value="GAMBIA">GAMBIA
                            </option>
                            <option value="GEORGIA">GEORGIA
                            </option>
                            <option value="GERMANY">GERMANY
                            </option>
                            <option value="GHANA">GHANA
                            </option>
                            <option value="GIBRALTAR">
                                GIBRALTAR</option>
                            <option value="GREECE">GREECE
                            </option>
                            <option value="GREENLAND">
                                GREENLAND</option>
                            <option value="GRENADA">GRENADA
                            </option>
                            <option value="GUADELOUPE">
                                GUADELOUPE</option>
                            <option value="GUAM">GUAM
                            </option>
                            <option value="GUATEMALA">
                                GUATEMALA</option>
                            <option value="GUINEA">GUINEA
                            </option>
                            <option value="GUINEA-BISSAU">
                                GUINEA-BISSAU</option>
                            <option value="GUYANA">GUYANA
                            </option>
                            <option value="HAITI">HAITI
                            </option>
                            <option value="HEARD ISLAND AND MCDONALD ISLANDS">
                                HEARD ISLAND AND MCDONALD
                                ISLANDS</option>
                            <option value="HOLY SEE (VATICAN CITY STATE)">
                                HOLY SEE (VATICAN CITY STATE)
                            </option>
                            <option value="HONDURAS">
                                HONDURAS</option>
                            <option value="HONG KONG">HONG
                                KONG</option>
                            <option value="HUNGARY">HUNGARY
                            </option>
                            <option value="ICELAND">ICELAND
                            </option>
                            <option value="INDIA">INDIA
                            </option>
                            <option value="INDONESIA">
                                INDONESIA</option>
                            <option value="IRAN, ISLAMIC REPUBLIC OF">
                                IRAN, ISLAMIC REPUBLIC OF
                            </option>
                            <option value="IRAQ">IRAQ
                            </option>
                            <option value="IRELAND">IRELAND
                            </option>
                            <option value="ISRAEL">ISRAEL
                            </option>
                            <option value="ITALY">ITALY
                            </option>
                            <option value="JAMAICA">JAMAICA
                            </option>
                            <option value="JAPAN">JAPAN
                            </option>
                            <option value="JORDAN">JORDAN
                            </option>
                            <option value="KAZAKHSTAN">
                                KAZAKHSTAN</option>
                            <option value="KENYA">KENYA
                            </option>
                            <option value="KIRIBATI">
                                KIRIBATI</option>
                            <option value="KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF">
                                KOREA, DEMOCRATIC PEOPLE'S
                                REPUBLIC OF</option>
                            <option value="KOREA, REPUBLIC OF">
                                KOREA, REPUBLIC OF</option>
                            <option value="KUWAIT">KUWAIT
                            </option>
                            <option value="KYRGYZSTAN">
                                KYRGYZSTAN</option>
                            <option value="LAO PEOPLE'S DEMOCRATIC REPUBLIC">
                                LAO PEOPLE'S DEMOCRATIC
                                REPUBLIC</option>
                            <option value="LATVIA">LATVIA
                            </option>
                            <option value="LEBANON">LEBANON
                            </option>
                            <option value="LESOTHO">LESOTHO
                            </option>
                            <option value="LIBERIA">LIBERIA
                            </option>
                            <option value="LIBYAN ARAB JAMAHIRIYA">
                                LIBYAN ARAB JAMAHIRIYA
                            </option>
                            <option value="LIECHTENSTEIN">
                                LIECHTENSTEIN</option>
                            <option value="LITHUANIA">
                                LITHUANIA</option>
                            <option value="LUXEMBOURG">
                                LUXEMBOURG</option>
                            <option value="MACAO">MACAO
                            </option>
                            <option value="MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF">
                                MACEDONIA, THE FORMER
                                YUGOSLAV REPUBLIC OF</option>
                            <option value="MADAGASCAR">
                                MADAGASCAR</option>
                            <option value="MALAWI">MALAWI
                            </option>
                            <option value="MALAYSIA">
                                MALAYSIA</option>
                            <option value="MALDIVES">
                                MALDIVES</option>
                            <option value="MALI">MALI
                            </option>
                            <option value="MALTA">MALTA
                            </option>
                            <option value="MARSHALL ISLANDS">
                                MARSHALL ISLANDS</option>
                            <option value="MARTINIQUE">
                                MARTINIQUE</option>
                            <option value="MAURITANIA">
                                MAURITANIA</option>
                            <option value="MAURITIUS">
                                MAURITIUS</option>
                            <option value="MAYOTTE">MAYOTTE
                            </option>
                            <option value="MEXICO">MEXICO
                            </option>
                            <option value="MICRONESIA, FEDERATED STATES OF">
                                MICRONESIA, FEDERATED STATES
                                OF</option>
                            <option value="MOLDOVA, REPUBLIC OF">
                                MOLDOVA, REPUBLIC OF</option>
                            <option value="MONACO">MONACO
                            </option>
                            <option value="MONGOLIA">
                                MONGOLIA</option>
                            <option value="MONTSERRAT">
                                MONTSERRAT</option>
                            <option value="MOROCCO">MOROCCO
                            </option>
                            <option value="MOZAMBIQUE">
                                MOZAMBIQUE</option>
                            <option value="MYANMAR">MYANMAR
                            </option>
                            <option value="NAMIBIA">NAMIBIA
                            </option>
                            <option value="NAURU">NAURU
                            </option>
                            <option value="NEPAL">NEPAL
                            </option>
                            <option value="NETHERLANDS">
                                NETHERLANDS</option>
                            <option value="NETHERLANDS ANTILLES">
                                NETHERLANDS ANTILLES</option>
                            <option value="NEW CALEDONIA">
                                NEW CALEDONIA</option>
                            <option value="NEW ZEALAND">NEW
                                ZEALAND</option>
                            <option value="NICARAGUA">
                                NICARAGUA</option>
                        </select>

                              </div>



                              <p class="text-red-600 font-medium block mt-[5px]"></p>
                              <div class="mb-2 mt-5">
                                <label for="" class="block mb-2 font-medium text-[#222]">Mobile No*</label>
                                <div class="flex relative">
                                  <!-- <span class="inline-flex w-20 items-center px-3 text-gray-900 bg-gray-200 border border-r-0 border-[#ECC762] rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    + 880</span> -->
                                    
                                    <input type="text" name="phone" placeholder="Enter phone number" value="{{ $profile_data ? $profile_data->phone : '' }}" class="w-full h-[45px] rounded-l-none rounded-lg border border-[#ECC762] bg-gray-100">
                                </div>
                                <p class="text-red-600 font-medium block mt-[5px]"></p>
                              </div>
                              <div class="mb-2 mt-7">
                                <label for="" class="block mb-2 font-medium text-[#222]">Email ID*</label>
                                <div class="relative">
                                  <input type="text"  name ="email" value="{{ $profile_data ? $profile_data->email : '' }}" class="w-full h-[45px] rounded-lg border border-[#ECC762] bg-gray-100">
                                  <span class="absolute right-[13px] top-[50%] translate-y-[-50%]"><i class="bi bi-patch-check-fill text-lg text-[#35AB35]"></i></span><!---->
                                </div>
                                <div class="flex justify-end mt-2"><!----></div>
                                <p class="text-red-600 font-medium block mt-[5px]"></p>
                              </div>
                              <!---->
                              <div class="flex mt-5 justify-left">
                                <button type="submit" class="px-[20px] py-[10px] rounded-lg bg-[#ECC762] uppercase font-semibold inline-flex items-center transition-all">
                                  Update Profile
                                  <i class="bx bx-chevron-right contents ml-1 text-2xl"></i>
                                </button>
                              </div>
                              <!---->
                            </form>
                          </div>
                        </div>
                      </div>
                      <!---->
                    </div>
                  </div>
                </div>