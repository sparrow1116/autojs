
launch('com.android.browser')
sleep(10*1000)
id('com.android.browser:id/asa').click()
sleep(2*1000)
let a = setText('https://petitions.whitehouse.gov/petition/we-call-immediate-investigation-hk-jimmy-lai-chee-ying')

sleep(2000)
id('com.android.browser:id/aqh').findOne().click();
sleep(20000)
text('Sign Now').findOne().click()
setText(1,'wocoacao')
sleep(2000)
setText(2,'woriri')
sleep(2000)
setText(3,'xxjjiwos@gmail.com')