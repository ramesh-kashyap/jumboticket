@include('layouts.mainsite.header')
<div class="greettingsPage">
    <div class="container">
        <div class="wrapIn">
            <h2 class="cap">News</h2>
            <span class="desr">Keep abreast with the<br /> latest developments</span>
            <div class="clockBl">
                <span class="iconBl icon-wall-clock-11"></span>
                <span id="time"></span>
                <span id="date"></span>
            </div>
        </div>
        <div class="picture" style="background-image: url(/assets/c20a81c4/img/bgnews.png);"></div>
    </div>
</div>
<div class="newsPage">
    <div class="container">
        <div class="wrapIn">
            <div id="w0" class="" style="width: 100%;">
                <div class="listNews">
                    <div class="item" data-key="192">
                        <div class="content">
                            <span class="date"> <span class="iconBl icon-calendar-11"></span> 23.11.2023</span>
                            <a href="#" class="link">Pdf presentation of {{ siteName() }} in English</a>
                            <span class="txt">
                                <p>Dear investors,
                                </p>
                                <p>New pdf presentation of {{ siteName() }} in English language is available for
                                    download at
                                </p>
                                <p><a href="#">PR-EN.pdf</a>
                                </p>
                            </span>
                        </div>
                    </div>
                    <div class="item" data-key="183">
                        <div class="content">
                            <span class="date"> <span class="iconBl icon-calendar-11"></span> 16.11.2023</span>
                            <a href="#" class="link">Welcome to {{ siteName() }}!</a>
                            <span class="txt">
                                <p>Dear investors,</p>
                                <p>It's our pleasure to greet each and everyone of you at {{ siteName() }} online
                                    investment platform, a new venue for all prudent investors, risk takers, and
                                    opportunity seekers.</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@include('layouts.mainsite.footer')
