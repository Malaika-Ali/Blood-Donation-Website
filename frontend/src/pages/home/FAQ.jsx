import React from "react";
import PropTypes from "prop-types";

const faqList = [
	{
		question: "What is Easy Frontend?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
	},
	{
		question: "Who is Easy Frontend for?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
	},
	{
		question: "How does Easy Frontend work?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
	},
	{
		question: "How often does your team upload resources?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
	},
	{
		question: "Can I get a refund if I cancel my subscription?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
	},
	{
		question: "Can I use Easy Frontend designs in my portfolio?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
	},
];

const FaqItem = ({ faq }) => (
	<div className="bg-gray-100 dark:bg-[#1E2735] rounded-xl">
		<h5 className="p-4 lg:p-6 lg:pb-5 w-full text-start flex justify-between items-center font-medium text-xl">
			<span>{faq.question}</span>
		</h5>
		<div className="ezy__faq5-content px-4 lg:px-6 lg:pb-6">
			<p className="opacity-50 mb-0">{faq.answer}</p>
		</div>
	</div>
);

FaqItem.propTypes = {
	faq: PropTypes.object.isRequired,
};

const FAQ = () => {
	return (
		<section className="light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-16 md:px-8 lg:px-28">
				<div className="grid grid-cols-12 justify-center md:mb-6">
					<div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
						<h2 className="font-bold text-[25px] md:text-[45px] leading-none mb-4">
							Frequently Asked Questions
						</h2>
						<p className="">
							It’s easier to reach your savings goals when you have the right
							savings account. Take a look and find the right one for you!
						</p>
					</div>
				</div>

				<div className="grid grid-cols-12 gap-6 mt-12">
					{faqList.map((faq, i) => (
						<div className="col-span-12 md:col-span-6" key={i}>
							<FaqItem faq={faq} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQ
