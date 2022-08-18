// importing comopnents
import Meta from "../components/meta";

const Editorialpolicy = () => {
  return (
    <div className="pt-20 w-screen mx-auto bg-gray-300 text-black">
      <Meta
        title="Editorial Policy | MIST"
        extraKeywords="editorial policy, editorial, policy, content"
        description="All our content is regulated by our efficient content team. 
                  The Editorial Policy elucidates what goes on behind the scenes 
                  as we aim to push out quality content every single time"
      />
      <div className="md:w-3/4 mx-auto px-5 pb-10">
        <h1 className="text-5xl pb-5 pt-10 emphasis-heading">
          Editorial Policy for Manipal Information Security Team
        </h1>
        <br />
        <p>
          At CyberManipal, accessible from{" "}
          <a href="https://wearemist.in/news" className="text-blue-600">
            https://wearemist.in/news
          </a>
          , we aim to keep our visitors updated with the latest in the tech world. This Editorial Policy describes how we collect data and use your contributions.
          <br />
          <br />
          If you have any additional queries, do not hesitate to contact us.
        </p>

        <br />

        <h2 className="text-black text-2xl">
          What is CyberManipal?
        </h2>
        <p>
          CyberManipal is your free source of latest news from the tech world, covering various aspects of cybersecurity, recent advancements in research and
          development, and other related technical stories . Aiming to provide readers with quality content encompassing credible information within a single
          paragraph, CyberManipal credits its contributors for upholding the standards of the write-ups on the site. CyberManipal is fully handled and operated
          Manipal information Security Team (MIST).
        </p>
        <br />

        <h2 className="text-black text-2xl">
          Who owns the content you submit?
        </h2>
        <p>
          The content submitted to CyberManipal is a property of MIST and the writer/contributor. The content you submit, even if abridged or summarised from
          another longer article, must be your own original work. Plagiarism and copyright infringement is highly discouraged. MIST does not take responsibility
          for any content that falls under the above labels or is noticed by a third party as violating any of their rules.
          <br /><br />
          MIST gives appropriate credits to content taken from any other source. Contributors are required to cite their sources while contributing towards CyberManipal.
        </p>
        <br />

        <h2 className="text-black text-2xl">
          What will we do with the content?
        </h2>

        <ul>
          <li className="list-item list-inside list-disc">
            Use, host, and/or store it as part of the MIST content database
          </li>
          <li className="list-item list-inside list-disc">
            Apart from copying, changing, or translating it, MIST also holds the right to take ideas from the content being submitted. We will edit the content only
            if required.
          </li>
          <li className="list-item list-inside list-disc">
            MIST holds the power to create, modify, take down or update any of the posts by any writer at any given point of time, or decide not to display it,
            as it deems fit. If it breaks any cyber-laws, we will take appropriate action.
          </li>
          <li className="list-item list-inside list-disc">
            MIST can use your submission in any form or media, and for as long as we want to, even if you stop contributing.
          </li>
        </ul>
        <br />

        <h2 className="text-black text-2xl">
          What is in store for the contributor?
        </h2>
        <p>
          The contributors get a dedicated profile on the website, with their name, photograph, and other social media handles, along with a short description of
          themselves. MIST does not pay any of the contributors in any way. MIST can use the content in any way it deems fit, and will do so without being objected
          by the contributor.
        </p>
        <br />

        <h2 className="text-black text-2xl">
          How to contribute to CyberManipal?
        </h2>
        <p>
          Create a profile for yourself on CyberManipal by filling out <a href="https://bit.ly/cybermanipal-author" target="_blank" rel="noreferrer" className="text-blue-800">this form</a>. Contribute to CyberManipal by submitting your write-up to
          us through <a href="https://bit.ly/cybermanipal-submission" target="_blank" rel="noreferrer" className="text-blue-800">this link</a>.
        </p>
        <br />

        <h2 className="text-black text-2xl">
          What is the format of submission?
        </h2>
        <p>
          The following are the fields you have to keep in mind while writing for us.
        </p>
        <p><span className="underline">Title</span> <span className="text-gray-800">A short, catchy title for the news article</span></p>
        <p><span className="underline">Tags</span> <span className="text-gray-800"> One of the following tags: Vulnerabilities, Research and Development, Breaches, Frauds and Scams, Policies and Regulations</span></p>
        <p><span className="underline">Name</span> <span className="text-gray-800">Name of the person writing the article</span></p>
        <p><span className="underline">Date</span> <span className="text-gray-800">The original date on which the article was published</span></p>
        <p><span className="underline">Credits</span> <span className="text-gray-800">Link to the original news article</span></p>
        <p><span className="underline">Text</span> <span className="text-gray-800">The news article written in your own words, with a word limit of 250 words</span></p>
        <br />
      </div>
    </div>
  );
};

export default Editorialpolicy;