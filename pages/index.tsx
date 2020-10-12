import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.about}>
      <div className={styles.timeline}>
        <section>
          <h3>Early Years</h3>
          <p>
            Michael's experience with tube amplifiers started more than 50 odd
            years ago. Ever since watching his older brother setup a stereo
            system as a kid, he had become interested in electronics. The seed
            was planted in the mid 60s when he started playing guitar and was
            curious how his guitar amplifier worked.
          </p>
        </section>
        <section>
          <h3>The '70s</h3>
          <p>
            He went on to study electronics at the University of Akron in Ohio,
            and soon after graduating began working for the city of Akron's
            Communications Department, earning his first-class FCC
            radiotelephone licence and continuing to deepen his knowledge into
            audio circuitry, which at the time was mostly tube based.
          </p>
        </section>

        <section>
          <h3>The '80s</h3>
          <p>
            By the 80s he was managing the electronic repair department of a
            large local music store. Having spent over 10 years working on
            everything from mixing boards to synthesizers and, of course, lots
            of guitar amps.
          </p>
        </section>

        <section>
          <h3>1964 The Tribute</h3>
          <p>
            In the 90s he was touring as the front of house sound engineer with
            the world renowned “1964 The Tribute”, a recreation of an early live
            Beatles show. He focused on reproducing live mixes of the original
            Beatles sound, and because of his deep tube amp knowledge, repaired
            and tweaked their amplifiers.
          </p>
          <p>
            One of the larger problems the group faced while touring was the
            weight of their vintage AC30s. At the time airline weight
            restrictions were becoming tighter and tighter, to the point where
            the group could no longer fly their real AC30s. They needed an amp
            that looked and sounded like a authentic Vox AC30 (what the Beatles
            played), but weighed in at half as much.
          </p>
          <p>
            Once again stepping in to help, Michael designed an amp that used a
            modified AC15 circuit with a custom lightweight clone cabinet. At
            half the weight of a original AC30, but with the same vintage sound,
            the problem was more than solved for the group.
          </p>
          <p>
            Michael continued to design and built numerous pieces of gear for
            the band to help recreate The Beatles sound including tube
            compressors and mic preamps. After leaving the band he continued to
            designing and building custom audio equipment. Selling his custom
            designs nationwide, and giving birth to Purkhiser Electronics.
          </p>
        </section>

        <section>
          <h3>Today</h3>
          <p>
            In more recent years, Michael has worked at{" "}
            <a href="http://drzamps.com/">Dr. Z Amplifiers</a>, where he built
            amps for many well know artists including Brad Paisley and Joe
            Walsh. And after moving to Los Angles in 2014, had also worked at{" "}
            <a href="https://www.matchlessamplifiers.com/">
              Matchless Amplifiers
            </a>
            .
          </p>

          <p>
            To this day Michael is repairing and restoring vintage tube
            amplifiers, and is ready to help with yours!
          </p>
        </section>
      </div>
    </div>
  );
}
