<div class="cab-content">
    
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
.cab-head {
 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100%;
    z-index: 1;
    padding-bottom: 108px;
    margin-bottom: auto;
}
.sample {
  padding: 2rem;
  text-align: center;
}

p {
    line-height: 1.6;
    margin-top: 1rem;
    font-size: medium;
}


button {
  background: transparent;
  border: 0;
  color: #666;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-weight: bold;
  padding: 0 1rem;
  text-transform: uppercase;

  &:hover {
    color: #111;
  }

  &.open-modal {
    background: #000;
    border-radius: 5px;
    color: #fff;
    display: inline-block;
    margin: 1rem 0.5rem;
    padding: 1rem;
  }
}

/* Modal styles */
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 2rem;
  position: static;
  top: 0;
  width: 100%;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease;

  .modal-backdrop {
    background: rgba(#000, 0.7);
    height: 100%;
    width: 100%;
    position: fixed;
  }

  .modal-content {
    background: #fff;
    border-radius: 5px;
    max-width: 600px;
    position: fixed;
    top: -100%;
    transition: all 0.6s ease;
    z-index: 1000;
  }

  .modal-header {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 1.5rem;

    .close-modal {
      font-size: 2rem;
      padding: 0;
      margin: 0;
      height: 30px;
      width: 30px;
      text-align: center;

      &:hover {
        color: #000;
      }
    }
  }
  
  .close-modal {
    position: absolute;
    right: 15px;
    top: 15px;
    background-image: none;
    height: 20px;
    width: 20px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50%;
    opacity: 0.3;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
}

  .modal-body {
    padding: 1.5rem;
  }

  .modal-footer {
    border-top: 1px solid #ccc;
    padding: 1rem;
    text-align: right;
  }

  &.visible {
    opacity: 1;
    visibility: visible;

    .modal-content {
      top: 25%;
    }
  }
}
a.result__txLink.btnText._primary {
    text-decoration: none;
    text-align: center;
    font-size: 18px;
    color: #4574eb;
}

.to-transaction
{
      background: #1bb257;
    width: 200px;
    margin: 0px auto;
    margin-top: 18px;
    color: #fff;
    padding: 10px;  
}
.review {
    background: #f5f6fa;
    border-radius: 0 0 8px 8px;
    padding: 32px 16px;
    text-align: center;
    width: 100%;
}

    </style>
    
    <div class="container">
       <div class="cab-tabs">
        <a class="cab-tabs__item active" href="{{route('user.profile')}}" style="text-decoration: none;">Account settings</a>
        <a class="cab-tabs__item" href="{{route('user.wallets')}}" style="text-decoration: none;">Wallets
            settings</a>
        <a class="cab-tabs__item " href="{{route('user.ChangePass')}}" style="text-decoration: none;">Change
            password</a>
       </div>
       <form method="post" action="{{ route('user.update-profile') }}" name="account_frm">

        {{ csrf_field() }}
        
          <div class="cab-inputs">
            <label class="cab-input">
                <P>Your Upline</P>
                <input type="text" value="{{ $profile_data->sponsor_detail ? $profile_data->sponsor_detail->username : '0' }}" readonly disabled>
                <svg>
                   <use xlink:href="assets/img/sprite.svg#user"></use>
                </svg>
             </label>

             <label class="cab-input">
                <P>Your Login</P>
                <input type="text" value="{{ $profile_data ? $profile_data->username : '' }}" readonly disabled>
                <svg>
                   <use xlink:href="assets/img/sprite.svg#user"></use>
                </svg>
             </label>

             <label class="cab-input">
                <P>Name</P>
                <input type="text" value="{{ $profile_data ? $profile_data->name : '' }}" name="name">
                <svg>
                   <use xlink:href="assets/img/sprite.svg#user"></use>
                </svg>
             </label>


             <label class="cab-input">
                <P>Your e‑mail</P>
                <input type="text" value="{{ $profile_data ? $profile_data->email : '' }}" readonly disabled>
                <svg>
                   <use xlink:href="assets/img/sprite.svg#mail"></use>
                </svg>
             </label>
             <label class="cab-input">
                <P>Country</P>
                <div class="cab-input__wrap">

                    <select name="country" id="" >

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
             </label>
         
             <label class="cab-input">
                <P>Mobile No</P>
                <input type="text" value="{{ $profile_data ? $profile_data->phone : '' }}"  name="phone">
                
             </label>

             <label class="cab-input">
                <P>Registration Date</P>
                <input type="text" value="{{ date("D, d M Y", strtotime($profile_data->created_at))}}"   readonly disabled >
                
             </label>
            <label class="cab-input">
                <P>Telegram</P>
                <input type="text" value="{{ $profile_data ? $profile_data->telegram : '' }}"  Placeholder="Telegram" name="telegram" >
                 <svg>
                   <use xlink:href="assets/img/sprite.svg#mail"></use>
                </svg>
             </label>


           
          </div>
          <button name="account_frm_btn" class="main-btn main-btn_orange main-btn_m">save</button>
       </form>
       <!--<button class="open-modal">Open modal</button>-->
    </div>
 </div>
 
   
    

</div>

