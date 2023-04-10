from textblob import TextBlob 

testimonial = TextBlob("This hosting plan is suitable for small to medium-sized websites, blogs, and online stores with moderate traffic. It provides a range of features to help you easily manage your website and get it online quickly. However, it may not be suitable for high-traffic websites or websites that require a lot of resources, as it is a shared hosting plan, meaning you will be sharing server resources with other websites on the same server.")
polarity = testimonial.sentiment.polarity
subjectivity = testimonial.sentiment.subjectivity 

print (testimonial)

if polarity > 0:
    print("Overall This sentence has a Positive Sentiment")
    print(testimonial.sentiment.polarity)
else:
    print("Overall This sentence has a Negative Sentiment")
    print(testimonial.sentiment.polarity)

if subjectivity > 0:
    print("Overall This sentence is Subjective")
    print(testimonial.sentiment.subjectivity)
else:
    print("Overall This sentence is Objective")
    print(testimonial.sentiment.subjectivity)



#print("polarity is the extent to which a text is negative or positive -1 = totally negative, + 1 = very positive ")
#print ("subjectivity - i feel vs Objectivity - it is ")

for b in testimonial.sentences:
    print (b.sentiment)
